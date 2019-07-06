![cogs-and-wheels](https://cdn-images-1.medium.com/max/1200/1*w1GrS524TYWo1PJ5bDLKug.jpeg)

So I’ve been writing React apps for a year now. I’ve had the honor of being one of the maintainers of react-boilerplate. If you’re a React developer, you know how it is- You get the mock-ups, you get the API endpoints and then you write the components. Easy-peasy. But over the period of time it becomes mundane. I never had a chance to work at the architectural level of live applications.

A couple of weeks ago, I was given a great opportunity to port one of our React applications to create-react-app. The short term goal was to see how difficult it is to move the legacy code to CRA; the long term goal being bringing all of our applications under CRA’s fold.

The reason for choosing CRA over any other boilerplate is that CRA is truly unopinionated which makes it ideal for porting legacy React applications. (It’s funny how 2-year old React apps have quickly become “legacy” apps!) Moving the source code wasn’t going to be difficult. All I had to do was copy and paste the src folder. But little did I know that I was far from porting the application. Once I started moving code, I realized that the only way to get to the other side was by having painstaking attention to detail. I had a lot of things to take care of. Some of them being-

1. Migrating tests from karma/chai to Jest.
2. Supporting less styles and svg files.
3. Using `file-loader` for requiring images. (Earlier we had a gulp task to copy assets straight to the build directory ahead of time.)
4. Replacing all instances of require.ensureto new es6 import()syntax.
5. Some find/replace problems like dropping React.PropTypesin favor of new prop-typespackage.
6. Removing all relative imports like
7. `import * as actions from '../../../actions/MyActions'` with module-like imports 
8. `import * as actions from 'actions/MyActions'`
9. And finally write a new build process on our build server since CRA recommends using Yarn.