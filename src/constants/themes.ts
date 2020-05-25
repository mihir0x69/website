import { Dictionary } from 'types'

const colors: Dictionary<string> = {
    background: '#1b262c',
    currentLine: '#44475a',
    selection: '#44475a',
    foreground: '#d9d9d9',
    heading: '#ffffff',
    comment: '#6272a4',
    cyan: '#8be9fd',
    green: '#50fa7b',
    orange: '#ffb86c',
    pink: '#ed6663',
    purple: '#bd93f9',
    red: '#ff5555',
    yellow: '#f1fa8c',
}

const fonts: Dictionary<string> = {
    heading: "'Inter', sans-serif",
    text: "'IBM Plex Serif', serif",
    mono: "'IBM Plex Mono', monospace",
}

export const DARK = 1
export const LIGHT = -1

export type Theme = {
    identify: () => number
    fonts: Dictionary<string>
    colors: Dictionary<string>
}

const themes: Dictionary<Theme> = {
    [DARK]: {
        identify: () => DARK,
        fonts,
        colors: {
            ...colors,
        },
    },
    [LIGHT]: {
        identify: () => LIGHT,
        fonts,
        colors: {
            ...colors,
            background: '#edf2f7',
            foreground: '#282a36',
            heading: '#282a36',
        },
    },
}

export default themes
