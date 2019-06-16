import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500|IBM+Plex+Sans:700|IBM+Plex+Serif:400,400i,700,700i&display=swap');
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
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
        text-decoration: none;
    }
    p {
        font-size: 17px;
        line-height: 1.5;
        margin: 7px 0 7px 0;
    }
    h1, h2, h3, h4, h5, h6 {
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
`

export default GlobalStyles
