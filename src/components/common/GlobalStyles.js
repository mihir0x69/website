import { createGlobalStyle } from 'styled-components'
import { DARK } from 'constants/themes'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500|IBM+Plex+Sans:700|IBM+Plex+Serif:400,400i,700,700i&display=swap');
    body {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.foreground};
        font-family: ${({ theme }) => theme.fonts.text};
        transition: all 300ms ease-in-out;
    }
    ::-moz-selection {
        background: ${({ theme }) => theme.colors.selection};
    }
    ::selection {
        background: ${({ theme }) => theme.colors.selection};
    }
    a,
    a:link,
    a:visited,
    a:hover,
    a:active {
        color: ${props => props.theme.colors.pink};
        text-decoration: underline;
    }
    p {
        font-size: 20px;
        line-height: 1.5;
        margin: 20px 0;
    }
    li, ol {
        font-size: 20px;
    }
    h1, h2, h3, h4, h5, h6 {
        color: ${props => props.theme.colors.heading};
        font-family: ${props => props.theme.fonts.heading}
    }
    h1 {
        font-size: 2em;
    }
    h2 {
        font-size: 1.5em;
    }
    h3 {
        font-size: 1.17em;
    }
    h4 {
        font-size: 1em;
    }
    blockquote {
        border-left: 3px solid ${props => props.theme.colors.foreground};
        padding-left: 15px;
    }
    b, strong {
        color: ${props => props.theme.identify() === DARK ? 'white' : 'black'};
    }
`

export default GlobalStyles
