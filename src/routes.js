import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import AnimatedIntro from 'containers/AnimatedIntro'
import Home from 'containers/Home'

const history = createBrowserHistory()

const Routes = () => {
    return (
        <Router history={history}>
            <Route path="/" exact component={AnimatedIntro} />
            <Route path="/home" component={Home} />
        </Router>
    )
}

export default Routes
