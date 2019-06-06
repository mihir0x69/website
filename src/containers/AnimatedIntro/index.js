import React, { useEffect } from 'react'
import styled from 'styled-components'
import ProgressiveImage from 'react-progressive-image'
import { Link } from 'react-router-dom'
import Paths from 'constants/paths'

const SPACEBAR = 32
const ENTER = 13

const Wrapper = styled.div`
    font-family: ${props => props.theme.fonts.retro};
    color: ${props => props.theme.colors.foreground};
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Images = styled.div`
    position: relative;
    overflow: hidden;
`

const Glasses = styled.img.attrs({
    alt: 'Glasses'
})`
    width: 60px;
    position: absolute;
    top: 48px;
    right: 68px;
    animation: thugmove 4s;

    @-webkit-keyframes thugmove {
        from { top: -20px; }
        to { top: 48px; }
    }

    @keyframes thugmove {
        from { top: -20px; }
        to { top: 48px; }
    }    
`

const StartButton = styled(Link)`
    color: ${({ theme }) => theme.colors.foreground};
    text-decoration: none;
    animation: blink-animation 1s steps(5, start) infinite;
    -webkit-animation: blink-animation 1s steps(5, start) infinite;
    animation-delay: 3s;

    @keyframes blink-animation {
        to {
            visibility: hidden;
        }
    }
    @-webkit-keyframes blink-animation {
        to {
            visibility: hidden;
        }
    }
`

const Content = ({ heroes, onPressStart }) => (
    <React.Fragment>
        <audio src={require('media/intro.mp3')} autoPlay />
        <Wrapper>
            <Images>
                <Glasses src={require('media/thug.png')} />
                <img src={heroes} style={{ width: 250 }} alt="Iddqd" />
            </Images>
            <br />
            <StartButton to="/home">{'PRESS START'}</StartButton>
        </Wrapper>
    </React.Fragment>
)

const AnimatedIntro = (props) => {
    useEffect(() => {
        document.addEventListener('keyup', onPressStart)

        return () => {
            document.removeEventListener('keyup', onPressStart)
        }
    })
    const onPressStart = (e) => {
        if (e.keyCode === SPACEBAR || e.keyCode === ENTER) {
            props.history.push(Paths.HOME)
        }
    }
    return (
        <ProgressiveImage src={require('media/contra.png')}>
            {
                (src, loading) => loading
                ? null
                : <Content heroes={src} onPressStart={onPressStart} />
            }
        </ProgressiveImage>
    )
}

export default AnimatedIntro
