import { createGlobalStyle, css } from 'styled-components'
import { DARK, Theme } from 'constants/themes'

type Props = {
    theme: Theme
}

const GlobalStyles = createGlobalStyle(
    ({ theme }: Props) => css`
        @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
        @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500|IBM+Plex+Sans:700|IBM+Plex+Serif:400,400i,700,700i&display=swap');
        body {
            background-color: ${theme.colors.background};
            color: ${theme.colors.foreground};
            font-family: ${theme.fonts.text};
            transition: all 300ms ease-in-out;
        }
        ::-moz-selection {
            background: ${theme.colors.selection};
        }
        ::selection {
            background: ${theme.colors.selection};
        }
        a,
        a:link,
        a:visited,
        a:hover,
        a:active {
            color: ${theme.colors.pink};
            text-decoration: underline;
        }
        p {
            font-size: 20px;
            line-height: 1.5;
            margin: 20px 0;
        }
        li,
        ol {
            font-size: 20px;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            color: ${theme.colors.heading};
            font-family: ${theme.fonts.heading};
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
            margin: 15px;
            font-size: 20px;
            border-left: 3px solid ${theme.colors.foreground};
            padding-left: 15px;
        }
        b,
        strong {
            color: ${theme.identify() === DARK ? 'white' : 'black'};
        }
    `
)

export default GlobalStyles
