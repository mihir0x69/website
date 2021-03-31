export const setTheme = (value: any): void => {
    if (typeof window !== 'undefined') {
        window.localStorage.setItem('theme', value)
    }
}

export const getTheme = (): number => {
    if (typeof window !== 'undefined') {
        return Number(window.localStorage.getItem('theme') || 0)
    }
}
