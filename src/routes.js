import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import AnimatedIntro from 'containers/AnimatedIntro'
import Home from 'containers/Home'
import Paths from 'constants/paths'

const history = createBrowserHistory()

const Routes = () => {
    return (
        <Router history={history}>
            <Route path={Paths.ROOT} exact component={AnimatedIntro} />
            <Route path={Paths.HOME} component={Home} />
        </Router>
    )
}

export default Routes
