import React, { useEffect } from 'react'
import ProgressiveImage from 'react-progressive-image'
import Paths from 'constants/paths'
import { Wrapper, Images, Glasses, StartButton } from './fragments'

const SPACEBAR = 32
const ENTER = 13

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

const AnimatedIntro = props => {
    useEffect(() => {
        document.addEventListener('keyup', onPressStart)

        return () => {
            document.removeEventListener('keyup', onPressStart)
        }
    })
    const onPressStart = e => {
        if (e.keyCode === SPACEBAR || e.keyCode === ENTER) {
            props.history.push(Paths.HOME)
        }
    }
    return (
        <ProgressiveImage src={require('media/contra.png')}>
            {(src, loading) =>
                loading ? null : (
                    <Content heroes={src} onPressStart={onPressStart} />
                )
            }
        </ProgressiveImage>
    )
}

export default AnimatedIntro
