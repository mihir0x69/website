import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AnimatedIntro from 'containers/AnimatedIntro'
import Home from 'containers/Home'
import Paths from 'constants/paths'
import BlogList from 'containers/BlogList'
import Blog from 'containers/Blog'
import Layout from 'components/common/Layout'

const Routes = () => {
    return (
        <Router>
            <Layout>
                <Route path={Paths.ROOT} exact component={AnimatedIntro} />
                <Route path={Paths.HOME} component={Home} />
                <Route path={Paths.BLOGS} component={BlogList} />
                <Route path={Paths.BLOG} component={Blog} />
            </Layout>
        </Router>
    )
}

export default Routes
