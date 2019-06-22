import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { withRouter } from 'react-router'
import GlobalStyles from 'components/common/GlobalStyles'
import StorageManager from 'utils/StorageManager'
import themes from 'constants/themes'
import paths from 'constants/paths'

const NavigationBar = styled.div`
    font-family: monospace;
    color: ${props => props.theme.colors.pink};
    display: flex;
    padding: 10px;
`

const NavItem = styled.div`
    flex: 1;
    text-align: center;
    & > span {
        cursor: pointer;
    }
`

const Container = styled.div`
    max-width: 750px;
    margin: 0 auto;
`

const Layout = props => {
    const [theme, setTheme] = useState(StorageManager.getTheme() || 1)
    const toggleTheme = () => {
        const newTheme = theme * -1
        StorageManager.setTheme(newTheme)
        setTheme(newTheme)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [props.location])

    const themeLabel = theme > 0 ? 'Lumos' : 'Nox'
    const navItems = [
        { label: 'Intro', onClick: () => props.history.push(paths.ROOT) },
        { label: 'Menu', onClick: () => props.history.push(paths.HOME) },
        { label: themeLabel, onClick: toggleTheme },
    ]
    return (
        <ThemeProvider theme={themes[theme]}>
            <React.Fragment>
                <GlobalStyles />
                <Container>
                    <NavigationBar>
                        {navItems.map((x, i) => (
                            <NavItem key={i}>
                                <span onClick={x.onClick}>
                                    {`[${x.label}]`}
                                </span>
                            </NavItem>
                        ))}
                    </NavigationBar>
                    {props.children}
                </Container>
            </React.Fragment>
        </ThemeProvider>
    )
}

export default withRouter(Layout)
