Let me set up the scene - You're working on a form with hundreds of fields. There's a button to save the form and it's only enabled when there's a change in the form state. This is because you don't want to post the form and utilize server's power to process the same damn form data!

The state is deeply nested and requires something like this over and over -

```js
const update = (state, row, updatedProps) => {
    return {
        ...state,
        productsByCategory: {
            ...state.productsByCategory,
            [row.productCategory]: {
                ...state.productsByCategory[row.productCategory],
                products: {
                    ...state.productsByCategory[row.productCategory].products,
                    [row.id]: {
                        ...state.productsByCategory[row.productCategory].products[row.id],
                        ...updatedProps
                    }
                }
            }
        }
    }
}

```


## Few things to keep in mind
1. I'm assuming you're using React. But the singleton object can work with any framework.
2. The examples used in this blog post are contrived and oversimplified. I only want to highlight the core usage.
3. The tracker is essentially a global variable. Those are considered bad, but I like to drift off from conventional wisdom every now and then to get things done.

## Where's the problem?
1. The problem is that I don't want to maintain a copy of the state and compare new state with it on every change. That'd be very expensive and I don't want my users to have a janky experience.

2. I also want to share the state of my form across many components. I could use Redux or just plain React Context. But both of them add unwanted complexity for this simple operation. DO NOT WANT.

3. The data is deeply nested and accessing/writing it is a very tedious job.

4. I do not want to introduce any new dependency just for this. I know `react-hook-form` and `immer` could help me with this. But they come with their own set of problems.

## Solution
I came up with a really simple solution - a so-called singleton javascript object that will store the original and updated values of each input. This way, I'm avoiding having to deal with the nested object. I can just pass this object around and any component can see the status of the form on demand!


```js
class ChangeTracker {
    constructor() {
        this.tracker = {}
    }

    // set original value only once and keep updating the latest value
    setValue(path, value) {
        this.tracker[path] = {
            originalValue: this.tracker[path]?.originalValue ?? value,
            updatedValue: value
        }
    }

    // Just a wrapper to set multiple values at once.
    // You can modify this to suit your needs.
    setValues(formFields, identifier) {
        _.forEach(formFields, (value, key) => this.setValue(`${identifier}-${key}`, value))
    }

    // Core logic to check if any of the values is dirty
    isDirty() {
        return _.reduce(
            this.tracker,
            (acc, curr) => {
                if (!acc) {
                    return curr.originalValue !== curr.updatedValue
                }
                return acc
            },
            false
        )
    }

    // Clean-up on demand
    reset() {
        this.tracker = {}
    }
}

// exporting a new object of the class ensures that it is a singleton
export const tracker = new ChangeTracker()
```

## Usage
To use this - all you have to do is initialize values at the time of fetching form state from the API using either `setValues` or `setValue`. And then use `setValue` every time any input changes. In my case, I'm using `useReducer` to aggregate all kinds input changes - so I have a single point where I can call this method. Just ensure that every field has a unique name.

```js
const data =
    fetch('https://my.api.com/form')
    .then(x => x.json())
    .then(formFields => {
        _.forEach(formFields, field => tracker.setValue(field.name, field.value))
        return formFields
    })
```

A really simple input box will look like this -

```js
<input
    type="text"
    name="firstName"
    onChange={(e) => {
        tracker.setValue(e.target.name, e.target.value)
        handleChange(e)
    }}
 />
```

And you can use `isDirty` method to determine the state of reset button!

```js
<button disabled={!tracker.isDirty()}>
    {'Reset'}
 </button>
```

Don't forget to clean up after yourself!

```js
    const MyPage = () => {
        useEffect(() => {

            // your side effects go here

            // Reset the tracker when the parent unmounts
            return () => tracker.reset()
        }, [])
    }
```