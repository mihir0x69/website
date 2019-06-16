import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
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

export const Images = styled.div`
    position: relative;
    overflow: hidden;
`

export const Glasses = styled.img.attrs({
    alt: 'Glasses',
})`
    width: 60px;
    position: absolute;
    top: 48px;
    right: 68px;
    animation: thugmove 4s;

    @-webkit-keyframes thugmove {
        from {
            top: -20px;
        }
        to {
            top: 48px;
        }
    }

    @keyframes thugmove {
        from {
            top: -20px;
        }
        to {
            top: 48px;
        }
    }
`

export const StartButton = styled(Link)`
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
