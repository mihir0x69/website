import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from 'components/common/GlobalStyles'
import StorageManager from 'utils/StorageManager'
import themes from 'constants/themes'

const ThemeToggler = styled.a`
    color: pink;
    position: fixed;
    right: 10px;
    top: 10px;
`

const Layout = (props) => {
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
                {props.children}
                <ThemeToggler href="#" onClick={toggleTheme}>
                    {'Toggle Theme'}
                </ThemeToggler>
            </React.Fragment>
        </ThemeProvider>
    )
}

export default Layout