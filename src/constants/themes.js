const colors = {
    background: '#282a36',
    currentLine: '#44475a',
    selection: '#44475a',
    foreground: '#f8f8f2',
    comment: '#6272a4',
    cyan: '#8be9fd',
    green: '#50fa7b',
    orange: '#ffb86c',
    pink: '#ff79c6',
    purple: '#bd93f9',
    red: '#ff5555',
    yellow: '#f1fa8c',
}

const fonts = {
    retro: "'Press Start 2P', cursive",
    heading: "'IBM Plex Sans', sans-serif",
    text: "'IBM Plex Serif', serif",
    mono: "'IBM Plex Mono', monospace",
}

export const DARK = 1
export const LIGHT = -1

export default {
    [DARK]: {
        fonts,
        colors: {
            ...colors
        },
    },
    [LIGHT]: {
        fonts,
        colors: {
            ...colors,
            background: colors.foreground,
            foreground: colors.background
        },
    },
}
