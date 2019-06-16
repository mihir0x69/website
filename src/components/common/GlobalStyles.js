import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Patua+One|Roboto:400,500,700&display=swap');

    body {
        margin: 0;
        padding: 0;
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
`

export default GlobalStyles
