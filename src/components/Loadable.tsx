import Loadable from 'react-loadable'
import Loader from './Loader'

const LoadableComponent = (component: () => Promise<any>) =>
    Loadable({
        loader: component,
        loading: Loader,
    })

export default LoadableComponent
