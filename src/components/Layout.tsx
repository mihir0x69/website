import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from 'components/GlobalStyles'
import * as StorageManager from 'utils/StorageManager'
import themes from 'constants/themes'
import paths from 'constants/paths'
const lumosSoundFile = require('media/lumos_maxima.mp3')

const NavigationBar = styled.div`
    display: flex;
    text-align: center;
`

const NavItem = styled.div`
    padding: 20px 0;
    font-family: ${props => props.theme.fonts.heading};
    color: ${props => props.theme.colors.pink};
    font-weight: bold;
    flex: 1;
    text-align: right;
    font-size: 20px;
    text-transform: uppercase;

    & > span {
        cursor: pointer;
    }
`

const HomeNavItem = styled(NavItem)`
    text-align: left;
`

const NavWrapper = styled.div`
    display: flex;
    margin: 30px 50px;
`

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
`

type Props = {
    children: React.ReactNode | Array<React.ReactNode>
}

const Layout: React.FC<Props> = (props: Props) => {
    const history = useHistory()
    const [theme, setTheme] = useState(StorageManager.getTheme() || 1)
    const [lumos] = useState(new Audio(lumosSoundFile))
    const toggleTheme = () => {
        lumos.play()
        const newTheme = theme * -1
        StorageManager.setTheme(newTheme)
        setTheme(newTheme)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [history.location])

    const themeLabel = theme > 0 ? 'Lumos' : 'Nox'
    const navItems = [
        { label: 'Blog', onClick: () => history.push(paths.BLOGS) },
        { label: 'Places', onClick: () => history.push(paths.PLACES) },
        { label: 'Work', onClick: () => history.push(paths.WHOAMI) },
        { label: themeLabel, onClick: toggleTheme },
    ]

    return (
        <ThemeProvider theme={themes[theme]}>
            <React.Fragment>
                <GlobalStyles />
                <base target="_blank" />
                <NavWrapper>
                    <div style={{ flex: 1 }}>
                        <HomeNavItem>
                            <span onClick={() => history.push(paths.ROOT)}>
                                <b>{'Mihir Karandikar'}</b>
                            </span>
                        </HomeNavItem>
                    </div>
                    <div style={{ flex: 1 }}>
                        <NavigationBar>
                            {navItems.map((x, i) => (
                                <NavItem key={i}>
                                    <span onClick={x.onClick}>{x.label}</span>
                                </NavItem>
                            ))}
                        </NavigationBar>
                    </div>
                </NavWrapper>
                <Container>{props.children}</Container>
            </React.Fragment>
        </ThemeProvider>
    )
}

export default Layout
