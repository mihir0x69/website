import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    RouteProps,
} from 'react-router-dom'
import paths from 'constants/paths'
import Home from 'containers/Home'
import BlogList from 'containers/BlogList'
import Blog from 'containers/Blogs'
import Places from 'containers/Places'
import Whoami from 'containers/Whoami'
import NotFound from 'containers/NotFound'
import Layout from 'components/Layout'

type RouteConfig = {
    path?: string | Array<string>
    exact?: boolean
    component: React.ElementType
    title?: string
}

const PAGE_TITLE_SUFFIX = 'Mihir ⚡️'

const blogPaths = [
    paths.BLOGS,
    paths.BLOGS_FILTERED_BY_TAG,
    paths.BLOGS_FILTERED_BY_TIMESTAMP,
]

const routes: RouteConfig[] = [
    { path: paths.ROOT, exact: true, component: Home, title: 'Home' },
    { path: blogPaths, exact: true, component: BlogList, title: 'Blogs' },
    { path: paths.BLOG, component: Blog },
    { path: paths.PLACES, component: Places, title: 'Places' },
    { path: paths.WHOAMI, component: Whoami, title: 'Who Am I' },
    { component: NotFound },
]

const renderRoute = (
    Component: React.ElementType,
    routeProps: RouteProps,
    title?: string
) => {
    document.title = title
        ? `${title} | ${PAGE_TITLE_SUFFIX}`
        : PAGE_TITLE_SUFFIX
    return <Component {...routeProps} />
}

const Routes: React.FC = () => (
    <Router>
        <Layout>
            <Switch>
                {routes.map(({ component, title, ...rest }, idx) => (
                    <Route
                        key={idx}
                        {...rest}
                        render={routeProps =>
                            renderRoute(component, routeProps, title)
                        }
                    />
                ))}
            </Switch>
        </Layout>
    </Router>
)

export default Routes
