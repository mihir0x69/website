import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import DefaultMetaTags from 'components/DefaultMetaTags'

const app = (
    <>
        <DefaultMetaTags />
        <Routes />
    </>
)

ReactDOM.render(app, document.getElementById('root'))
