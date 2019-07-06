![cogs-and-wheels](https://cdn-images-1.medium.com/max/1200/1*w1GrS524TYWo1PJ5bDLKug.jpeg)

So I’ve been writing React apps for a year now. I’ve had the honor of being one of the maintainers of [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate). If you’re a React developer, you know how it is- You get the mock-ups, you get the API endpoints and then you write the components. Easy-peasy. But over the period of time it becomes mundane. I never had a chance to work at the architectural level of live applications.

A couple of weeks ago, I was given a great opportunity to port one of our React applications to [create-react-app](https://github.com/facebook/create-react-app). The short term goal was to see how difficult it is to move the legacy code to CRA; the long term goal being bringing all of our applications under CRA’s fold.

The reason for choosing CRA over any other boilerplate is that CRA is truly unopinionated which makes it ideal for porting legacy React applications. _(It’s funny how 2-year old React apps have quickly become “legacy” apps!)_ Moving the source code wasn’t going to be difficult. All I had to do was copy and paste the src folder. But little did I know that I was far from porting the application. Once I started moving code, I realized that the only way to get to the other side was by having painstaking attention to detail. I had a lot of things to take care of. Some of them being-

1. Migrating tests from karma/chai to [Jest](https://facebook.github.io/jest/).
2. Supporting [Less](http://lesscss.org/) styles and svg files.
3. Using `file-loader` for requiring images. (Earlier we had a gulp task to copy assets straight to the build directory ahead of time.)
4. Replacing all instances of `require.ensure` to new es6 `import()` syntax.
5. Some find/replace problems like dropping `React.PropTypes` in favor of new `prop-types` package.
6. Removing all relative imports like -

    `import * as actions from '../../../actions/MyActions'`

    with module-like imports -

    `import * as actions from 'actions/MyActions'`
9. And finally write a new build process on our build server since CRA recommends using [Yarn](https://yarnpkg.com/en/).

That meant, a decision was to be made!

[Link](https://twitter.com/KarandikarMihir/status/880031707600113664)

We were debating over ejecting the create-react-app setup Vs. using custom [react-scripts](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts). Initially, I was in favor of ejecting because it gives you total control. But then I realized that ejecting would make it nearly impossible to keep up with the [daily updates](https://github.com/facebookincubator/create-react-app/commits/master) of CRA, which meant that custom react scripts was the best way to go. I want to thank [Shubheksha](https://medium.com/@shubheksha/tweaking-configuration-for-react-scripts-in-create-react-app-d91e9d03a42f) and [Kitze](https://medium.com/@kitze/configure-create-react-app-without-ejecting-d8450e96196a) for their awesome articles. Really helped understand the pros and cons of ejecting!

We forked CRA, modified the webpack and jest config to our taste and hosted `xoxo-react-scripts` in our private npm registry. I cannot stress enough how cool it is to have custom scripts. Now we just have to pull changes from upstream, resolve conflicts (if any at all) and republish the scripts! We were moving in the right direction. Things were looking good.

I’m not going to go in the implementation details of migration, but the purpose of my post is to let others know that it is absolutely possible to port your app to CRA no matter how weird your legacy app setup is.

With the power of CRA + custom react scripts, we now TRULY have a zero configuration tool in our tool-belt. From now on, to migrate/create the next app, all we need to do is `create-react-app my-app --scripts-version xoxo-react-scripts` and we’re off and running!

## Things to keep in mind
To my disappointment, CRA does not come with react-hot-loader. However, it comes with raw HMR. But not to worry! You can use react-hot-loader with minor changes in your app-entry.

Install react-hot-loader@next as a dev-dependency. And something like this in your app-entry should do the trick!

```jsx
.
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import App from './app'

const renderApp = (Root) => (
  render(
    <AppContainer>
      <Root />
    </AppContainer>,
    document.getElementById('app-root')
  )
)

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NewApp = require('./app').default
    renderApp(NewApp)
  })
}
```

To make your custom react-scripts work, you have to have a package published either in npm registry or private registry. Before publishing your package, make sure you change the references of original “react-scripts” in your package.json.

```json
"scripts": {
    "start": "xoxo-react-scripts start",
    "build": "xoxo-react-scripts build",
    "test": "xoxo-react-scripts test --env=jsdom",
    "eject": "xoxo-react-scripts eject"
}
```

For these npm scripts to work, you need to change the `bin` property of `xoxo-react-scripts` [package.json](https://github.com/facebookincubator/create-react-app/blob/master/packages/create-react-app/package.json#L21)

```json
"bin": {
    "xoxo-create-react-app": "./index.js"
}
```

Publish `xoxo-react-scripts`. Run `npm i xoxo-react-scripts -D` in your project. And then run `npm start`!

During development, you’ll often need to modify custom react scripts. There’s a cool way to test packages without having to publish and install. You can use `npm link` for that. Follow [this guide](https://egghead.io/lessons/node-js-using-npm-link-to-use-node-modules-that-are-in-progress) to know more.

## Overall Experience

We chose create react app because it has a robust support in the community and its decoupled nature lets you create a great tool for scaffolding out boilerplates for new projects. Another major advantage of having CRA is that you no longer need to worry about updating webpack and babel plugins and presets and what not. It lets you focus on what’s important. Thank you [Dan Abramov](https://medium.com/@dan_abramov) and entire CRA team for this tool. We’re finally going to have a unified DX (Developer eXperience) in all of our apps.

