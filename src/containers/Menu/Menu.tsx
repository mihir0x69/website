import React, { useState, useEffect, MouseEvent } from 'react'
import { useHistory } from 'react-router-dom'
import paths from 'constants/paths'
import { Container, ItemList, Item } from './fragments'

const SPACEBAR = 32
const UP = 38
const DOWN = 40

type Page = {
    label: string
    link: string
}

const items: Array<Page> = [
    { label: 'Blog', link: paths.BLOGS },
    { label: 'Places', link: paths.PLACES },
    { label: 'Whoami', link: paths.WHOAMI },
]

type HandlerParams = {
    keyCode: number
}

const Menu: React.FC = () => {
    const history = useHistory()
    const [sound] = useState(new Audio(require('media/menu.wav')))
    const [activeItem, setActiveItem] = useState(0)
    const handleKeyboardEvents = (e: HandlerParams) => {
        const { keyCode } = e
        if (!sound.paused) {
            return
        }
        if (keyCode === SPACEBAR) {
            history.push(items[activeItem].link)
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
                    const eventHandler = (e: MouseEvent) => {
                        sound.play()
                        setActiveItem(idx)
                        if (e.type === 'click') {
                            history.push(items[idx].link)
                        }
                    }
                    return (
                        <Item
                            key={idx}
                            onClick={eventHandler}
                            onMouseOver={eventHandler}
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
