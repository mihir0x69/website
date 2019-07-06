import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AnimatedIntro from 'containers/AnimatedIntro'
import Menu from 'containers/Menu'
import paths from 'constants/paths'
import BlogList from 'containers/BlogList'
import Blog from 'containers/Blogs'
import Places from 'containers/Places'
import Layout from 'components/common/Layout'

const Routes = () => {
    return (
        <Router>
            <Layout>
                <Route path={paths.ROOT} exact component={AnimatedIntro} />
                <Route path={paths.MENU} component={Menu} />
                <Route path={paths.BLOGS_PATH} component={BlogList} />
                <Route path={paths.BLOG} component={Blog} />
                <Route path={paths.PLACES} component={Places} />
            </Layout>
        </Router>
    )
}

export default Routes
