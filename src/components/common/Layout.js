import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from 'components/common/GlobalStyles'
import StorageManager from 'utils/StorageManager'
import themes from 'constants/themes'

const NavigationBar = styled.div`
    font-family: monospace;
    color: ${props => props.theme.colors.pink};
    display: flex;
    justify-content: space-between;
    padding: 10px;
`

const Layout = props => {
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
                <NavigationBar>
                    <span onClick={toggleTheme}>{'[Toggle Theme]'}</span>
                    <span onClick={toggleTheme}>{'[Show Menu]'}</span>
                    <span onClick={toggleTheme}>{'[Mute Audio]'}</span>
                </NavigationBar>
                {props.children}
            </React.Fragment>
        </ThemeProvider>
    )
}

export default Layout
