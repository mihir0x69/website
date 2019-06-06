import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from 'components/common/GlobalStyles'
import App from './routes'
import themes from './theme'
import StorageManager from 'utils/StorageManager'
import './styles.css'

const ThemeToggler = styled.a`
    color: pink;
    position: fixed;
    right: 10px;
    top: 10px;
`

const Shell = () => {
    const [theme, setTheme] = useState(StorageManager.getTheme() || 1)
    const toggleTheme = () => {
        const newTheme = theme * -1
        StorageManager.setTheme(newTheme)
        setTheme(newTheme)
    }
    return (
        <ThemeProvider theme={themes[theme]}>
            <React.Fragment>
                <GlobalStyles />
                <App />
                <ThemeToggler href="#" onClick={toggleTheme}>
                    {'Toggle Theme'}
                </ThemeToggler>
            </React.Fragment>
        </ThemeProvider>
    )
}

ReactDOM.render(<Shell />, document.getElementById('root'))
