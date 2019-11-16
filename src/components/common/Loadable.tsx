import React from 'react'
import Loadable from 'react-loadable'
import Loader from './Loader'

export default (component: () => Promise<React.FC>) =>
    Loadable({
        loader: component,
        loading: Loader,
    })
