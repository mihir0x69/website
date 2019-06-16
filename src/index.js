import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes'
import Layout from 'components/common/Layout'
import './styles.css'

const Shell = () => {
    return (
        <Layout>
            <App />
        </Layout>
    )
}

ReactDOM.render(<Shell />, document.getElementById('root'))
