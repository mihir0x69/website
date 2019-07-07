import Loadable from 'react-loadable'
import Loader from './Loader'

export default component =>
    Loadable({
        loader: component,
        loading: Loader,
    })
