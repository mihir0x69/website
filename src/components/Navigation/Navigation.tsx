import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import * as StorageManager from 'utils/StorageManager'
import paths from 'constants/paths'
import { NavItemType } from 'types'
import {
    NavigationBar,
    NavItem,
    HomeNavItem,
    NavWrapper,
    RightNavWrapper,
} from './fragments'
import { Navigation as MobileNavigation } from './MobileNavigation'

const lumosSoundFile = require('media/lumos_maxima.mp3').default

type NavigationBarProps = {
    theme: any
    setTheme: any
}

const Navigation: React.FC<NavigationBarProps> = ({ theme, setTheme }) => {
    const history = useHistory()
    const [lumos] = useState(new Audio(lumosSoundFile))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [history.location])

    const toggleTheme = () => {
        lumos.play()
        const newTheme = theme * -1
        StorageManager.setTheme(newTheme)
        setTheme(newTheme)
    }

    const themeLabel = theme > 0 ? 'Lumos' : 'Nox'

    const navItems: Array<NavItemType> = [
        { label: 'Blog', onClick: () => history.push(paths.BLOGS) },
        { label: 'Places', onClick: () => history.push(paths.PLACES) },
        { label: 'Work', onClick: () => history.push(paths.WORK) },
        { label: themeLabel, onClick: toggleTheme },
    ]

    return (
        <NavWrapper>
            <MobileNavigation navItems={navItems} />
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
            <RightNavWrapper>
                <NavigationBar>
                    {navItems.map((x, i) => (
                        <NavItem key={i}>
                            <span onClick={x.onClick}>{x.label}</span>
                        </NavItem>
                    ))}
                </NavigationBar>
            </RightNavWrapper>
        </NavWrapper>
    )
}

export default Navigation
