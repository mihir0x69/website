import React from 'react'
import styled from 'styled-components'
import { NavItem } from './fragments'

const HamburgerIconDandi = styled.div`
    width: 25px;
    height: 3px;
    background-color: ${props => props.theme.colors.foreground};
    margin-bottom: 3px;
`

const Icon = styled.div`
    display: none;
    @media (max-width: 991px) {
        display: block;
        margin-right: 10px;
    }
`

type MenuIconProps = {
    openMenu: any
}

export const MenuIcon: React.FC<MenuIconProps> = ({ openMenu }) => (
    <Icon onClick={openMenu}>
        <HamburgerIconDandi />
        <HamburgerIconDandi />
        <HamburgerIconDandi />
    </Icon>
)

const OverlayMenuWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: -1000px;
    left: 0;
    z-index: 9999;
    background-color: ${props => props.theme.colors.background};
`

const OverlayMenuItems = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const CrossMark = styled.div`
    position: fixed;
    right: 25px;
    top: 25px;
    width: 25px;
    height: 25px;
    z-index: 99999;

    :hover {
        opacity: 1;
    }

    :before,
    :after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 25px;
        width: 3px;
        background-color: ${props => props.theme.colors.foreground};
    }

    :before {
        transform: rotate(45deg);
    }

    :after {
        transform: rotate(-45deg);
    }
`

type OverLayMenuProps = {
    closeMenu: any
    navItems: Array<any>
}

export const OverlayMenu: React.FC<OverLayMenuProps> = ({
    navItems,
    closeMenu,
}) => {
    const handleClick = (fn: any) => () => {
        fn()
        closeMenu()
    }

    return (
        <OverlayMenuWrapper>
            <CrossMark onClick={closeMenu} />
            <OverlayMenuItems>
                {navItems.map((x, i) => (
                    <p>
                        <NavItem key={i}>
                            <span onClick={handleClick(x.onClick)}>
                                {x.label}
                            </span>
                        </NavItem>
                    </p>
                ))}
            </OverlayMenuItems>
        </OverlayMenuWrapper>
    )
}
