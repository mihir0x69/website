import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from 'components/common/GlobalStyles'
import AnimatedIntro from 'components/AnimatedIntro'
import themes from './theme'
import './styles.css'

const ThemeToggler = styled.a`
    position: fixed;
    right: 10px;
    top: 10px;
`

const App = () => {
    const [theme, setTheme] = useState(1)
    const toggleTheme = () => setTheme(theme * -1)
    return (
        <ThemeProvider theme={themes[theme]}>
            <React.Fragment>
                <GlobalStyles />
                <AnimatedIntro />
                <ThemeToggler href="#" onClick={toggleTheme}>
                    {'Toggle Theme'}
                </ThemeToggler>
            </React.Fragment>
        </ThemeProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
