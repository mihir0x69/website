import Loadable from 'react-loadable'
import Loader from './Loader'

export default (component: () => Promise<any>) =>
    Loadable({
        loader: component,
        loading: Loader,
    })
