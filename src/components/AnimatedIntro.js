import React from 'react'
import styled from 'styled-components'
import ProgressiveImage from 'react-progressive-image'

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
    -webkit-animation: thugmove 5s infinite; /* Safari 4.0 - 8.0 */
    animation: thugmove 4s;

    @-webkit-keyframes thugmove {
        from { top: -20px; }
        to { top: 48px; }
    }

    /* Standard syntax */
    @keyframes thugmove {
        from { top: -20px; }
        to { top: 48px; }
    }    
`

const StartButton = styled.span`
    animation: blink-animation 1s steps(5, start) infinite;
    -webkit-animation: blink-animation 1s steps(5, start) infinite;
    animation-delay: 3s;
    -webkit-animation-delay: 3s;

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

const Content = ({ heroes }) => (
    <React.Fragment>
        <audio src={require('media/intro.mp3')} autoPlay />
        <Wrapper>
            <Images>
                <Glasses src={require('media/thug.png')} />
                <img src={heroes} style={{ width: 250 }} alt="Iddqd" />
            </Images>
            <br />
            <StartButton>{'PRESS START'}</StartButton>
        </Wrapper>
    </React.Fragment>
)

const AnimatedIntro = () => (
    <ProgressiveImage src={require('media/contra.png')}>
        {
            (src, loading) => loading
            ? null
            : <Content heroes={src} />
        }
    </ProgressiveImage>
)

export default AnimatedIntro
