import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useCycle } from 'framer-motion'
import useDimensions from 'hooks/useDimensions'
import { colors } from 'constants/themes'
import { NavItemType } from 'types'
import { NavItem } from './fragments'

const StyledPath = styled(motion.path).attrs(props => ({
    stroke: props.theme.colors.background,
}))``

const Path = (props: any) => (
    <StyledPath
        fill="transparent"
        strokeWidth="3"
        strokeLinecap="round"
        {...props}
    />
)

const Icon = styled.div`
    position: absolute;
    right: 10px;
    top: 30px;
    display: none;
    z-index: 9999;
    @media (max-width: 991px) {
        display: block;
        margin-right: 10px;
    }
`

const MenuItems = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Background = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: -200px;
    width: 100%;
    background-color: ${props => props.theme.colors.pink};
    color: ${props => props.theme.colors.white};
    z-index: 999;
`

const MotionNav = styled(motion.nav)`
    display: none;
    @media (max-width: 991px) {
        display: block;
    }
`

const MotionList = styled(motion.ul)`
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > li {
        margin: 20px;
    }
`

type MenuIconProps = {
    toggleOpen: any
}

const MenuIcon: React.FC<MenuIconProps> = ({ toggleOpen }) => (
    <Icon onClick={toggleOpen}>
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: 'M 2 2.5 L 20 2.5' },
                    open: { d: 'M 3 16.5 L 17 2.5' },
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: 'M 2 16.346 L 20 16.346' },
                    open: { d: 'M 3 2.5 L 17 16.346' },
                }}
            />
        </svg>
    </Icon>
)

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: 'circle(20px at calc(100% - 32px) 40px)',
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
}

const listVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}

const listItemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
}

const enableBodyScrolling = (enableScroll: boolean) => {
    document.body.style.overflow = enableScroll ? 'auto' : 'hidden'
}

type NavigationProps = {
    navItems: Array<NavItemType>
}

export const Navigation: React.FC<NavigationProps> = ({ navItems }) => {
    const [isOpen, toggleOpen] = useCycle(false, true)
    const containerRef = useRef(null)
    const { height } = useDimensions(containerRef)

    const toggle = () => {
        enableBodyScrolling(isOpen)
        toggleOpen()
    }

    const handleClick = (fn: any) => () => {
        fn()
        toggle()
    }

    return (
        <MotionNav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
            ref={containerRef}
        >
            <Background variants={sidebar}>
                <MenuItems>
                    <MotionList variants={listVariants}>
                        {navItems.map((x, i) => (
                            <motion.li
                                variants={listItemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <NavItem color={colors.white}>
                                    <span onClick={handleClick(x.onClick)}>
                                        {x.label}
                                    </span>
                                </NavItem>
                            </motion.li>
                        ))}
                    </MotionList>
                </MenuItems>
            </Background>
            <MenuIcon toggleOpen={toggle} />
        </MotionNav>
    )
}
