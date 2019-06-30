import React, { useState, useEffect } from 'react'
import paths from 'constants/paths'
import menuSoundFile from 'media/menu.wav'
import { Container, ItemList, Item } from './fragments'

const SPACEBAR = 32
const UP = 38
const DOWN = 40

const items = [
    { label: 'Blog', link: paths.BLOGS },
    { label: 'Places', link: paths.PLACES },
    { label: 'Whois', link: '#' },
]

const Menu = props => {
    const [sound] = useState(new Audio(menuSoundFile))
    const [activeItem, setActiveItem] = useState(0)
    const handleKeyboardEvents = ({ keyCode }) => {
        if (!sound.paused) {
            return
        }
        if (keyCode === SPACEBAR) {
            props.history.push(items[activeItem].link)
            return
        }
        let nextState = activeItem
        if (keyCode === UP && nextState !== 0) {
            sound.play()
            nextState = nextState - 1
        } else if (keyCode === DOWN && nextState !== items.length - 1) {
            sound.play()
            nextState = nextState + 1
        }
        setActiveItem(nextState)
    }
    useEffect(() => {
        document.addEventListener('keydown', handleKeyboardEvents)
        return () => {
            document.removeEventListener('keydown', handleKeyboardEvents)
        }
    })
    return (
        <Container>
            <ItemList>
                {items.map((x, idx) => {
                    const clickHandler = () => {
                        sound.play()
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
            </ItemList>
        </Container>
    )
}

export default Menu
