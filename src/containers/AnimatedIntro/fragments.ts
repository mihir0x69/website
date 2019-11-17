import styled from 'styled-components'

export const Wrapper = styled.div`
    font-family: ${props => props.theme.fonts.retro};
    color: ${props => props.theme.colors.foreground};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
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

export const StartButton = styled.span`
    color: ${({ theme }) => theme.colors.foreground};
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

export const Skip = styled.span(
    props => `
    font-size: 7px;
    color: ${props.theme.colors.foreground};
    opacity: 0.4;
    margin: 20px;
    cursor: pointer;
`
)
