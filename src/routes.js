import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AnimatedIntro from 'containers/AnimatedIntro'
import Home from 'containers/Home'
import Paths from 'constants/paths'

const Routes = () => {
    return (
        <Router>
            <Route path={Paths.ROOT} exact component={AnimatedIntro} />
            <Route path={Paths.HOME} component={Home} />
        </Router>
    )
}

export default Routes
