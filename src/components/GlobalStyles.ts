import { createGlobalStyle, css } from 'styled-components'
import { DARK, Theme } from 'constants/themes'

type Props = {
    theme: Theme
}

const GlobalStyles = createGlobalStyle(
    ({ theme }: Props) => css`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap');
        @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500|IBM+Plex+Serif:400,400i,700,700i&display=swap');
        body {
            background-color: ${theme.colors.background};
            color: ${theme.colors.foreground};
            font-family: ${theme.fonts.text};
            transition: all 300ms ease-in-out;
            margin: 0;
            padding: 0;
        }
        ::-moz-selection {
            background: ${theme.colors.selection};
            color: #edf2f7;
        }
        ::selection {
            background: ${theme.colors.selection};
            color: #edf2f7;
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
            font-size: 2.5em;
            font-weight: 700;
        }
        h2 {
            font-size: 1.5em;
            font-weight: 500;
        }
        h3 {
            font-size: 1.17em;
            font-weight: 400;
        }
        h4 {
            font-size: 1em;
            font-weight: 400;
        }
        blockquote {
            margin: 30px;
            font-size: 20px;
            border-left: 4px solid ${theme.colors.foreground};
            padding-left: 15px;
        }
        b,
        strong {
            color: ${theme.identify() === DARK ? 'white' : 'black'};
        }
    `
)

export default GlobalStyles
