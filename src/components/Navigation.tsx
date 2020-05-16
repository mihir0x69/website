import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import * as StorageManager from 'utils/StorageManager'
import paths from 'constants/paths'
const lumosSoundFile = require('media/lumos_maxima.mp3')

const NavigationBar = styled.div`
    display: flex;

    @media (max-width: 991px) {
        display: none;
    }
`

const NavItem = styled.div`
    padding: 20px 0;
    text-align: center;
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
    @media (max-width: 991px) {
        padding: 10px;
    }

    > span:hover {
        border-bottom: 3px solid ${props => props.theme.colors.foreground};
    }

    > span {
        padding-bottom: 3px;
        border-bottom: 3px solid transparent;
        transition: all 200ms ease-in-out;
    }
`

const NavWrapper = styled.div`
    display: flex;
    margin: 30px 50px;
    @media (max-width: 991px) {
        margin: 10px;
    }
`

const LeftNavWrapper = styled.div`
    flex: 1;

    @media (max-width: 991px) {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
`

const HamburgerIconDandi = styled.div`
    width: 25px;
    height: 3px;
    background-color: ${props => props.theme.colors.foreground};
    margin: 3px 0;
`

const Icon = styled.div`
    display: none;
    @media (max-width: 991px) {
        display: block;
    }
`

const MenuIcon: React.FC = () => (
    <Icon>
        <HamburgerIconDandi />
        <HamburgerIconDandi />
        <HamburgerIconDandi />
    </Icon>
)

const OverlayMenuWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background-color: ${props => props.theme.colors.background};
`

const OverlayMenu = () => {
    return (
        <OverlayMenuWrapper>
            <h1>{'Overlay'}</h1>
        </OverlayMenuWrapper>
    )
}

type NavigationBarProps = {
    theme: any
    setTheme: any
}

const Navigation: React.FC<NavigationBarProps> = ({ theme, setTheme }) => {
    const history = useHistory()
    const [lumos] = useState(new Audio(lumosSoundFile))
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [history.location])

    const toggleMenu = () => setIsMenuVisible(!isMenuVisible)

    const toggleTheme = () => {
        lumos.play()
        const newTheme = theme * -1
        StorageManager.setTheme(newTheme)
        setTheme(newTheme)
    }
    const themeLabel = theme > 0 ? 'Lumos' : 'Nox'
    const navItems = [
        { label: 'Blog', onClick: () => history.push(paths.BLOGS) },
        { label: 'Places', onClick: () => history.push(paths.PLACES) },
        { label: 'Work', onClick: () => history.push(paths.WORK) },
        { label: themeLabel, onClick: toggleTheme },
    ]

    return (
        <NavWrapper>
            {isMenuVisible && <OverlayMenu />}
            <div style={{ flex: 1 }}>
                <HomeNavItem>
                    <span onClick={() => history.push(paths.ROOT)}>
                        <b>
                            {'Mihir '}
                            {'Karandikar'}
                        </b>
                    </span>
                </HomeNavItem>
            </div>
            <LeftNavWrapper>
                <NavigationBar>
                    {navItems.map((x, i) => (
                        <NavItem key={i}>
                            <span onClick={x.onClick}>{x.label}</span>
                        </NavItem>
                    ))}
                </NavigationBar>
                <MenuIcon />
            </LeftNavWrapper>
        </NavWrapper>
    )
}

export default Navigation
