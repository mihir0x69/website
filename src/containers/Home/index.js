import React, { useState, useEffect } from 'react'
import paths from 'constants/paths'
import { Container, Menu, Item } from './fragments'

const SPACEBAR = 32
const UP = 38
const DOWN = 40

const items = [
    { label: 'Blog', link: paths.BLOG },
    { label: 'Places', link: '#' },
    { label: 'Whois', link: '#' },
]

const Home = props => {
    const [activeItem, setActiveItem] = useState(0)
    const handleKeyboardEvents = ({ keyCode }) => {
        if (keyCode === SPACEBAR) {
            props.history.push(items[activeItem].link)
        }
        let nextState = activeItem
        if (keyCode === UP && nextState !== 0) {
            nextState = nextState - 1
        } else if (keyCode === DOWN && nextState !== items.length - 1) {
            nextState = nextState + 1
        }
        setActiveItem(nextState)
    }
    useEffect(() => {
        document.addEventListener('keyup', handleKeyboardEvents)
        return () => {
            document.removeEventListener('keyup', handleKeyboardEvents)
        }
    })
    return (
        <Container>
            <Menu>
                {items.map((x, idx) => {
                    const clickHandler = () => {
                        setActiveItem(idx)
                        props.history.push(items[idx].link)
                    }
                    return (
                        <Item
                            key={idx}
                            onClick={clickHandler}
                            active={idx === activeItem}
                        >
                            {x.label}
                        </Item>
                    )
                })}
            </Menu>
        </Container>
    )
}

export default Home
