import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes'
import Layout from 'components/common/Layout'

const Shell = () => {
    return (
        <Layout>
            <App />
        </Layout>
    )
}

ReactDOM.render(<Shell />, document.getElementById('root'))
