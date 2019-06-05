import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme })=> theme.colors.foreground};
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