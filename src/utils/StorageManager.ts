export const setTheme = (value: any): void => {
    localStorage.setItem('theme', value)
}

export const getTheme = (): number => {
    return Number(localStorage.getItem('theme') || 0)
}

export const disableIntro = (): void => {
    localStorage.setItem('disableIntro', new Date().toString())
}

export const hasDisabledIntro = (): boolean => {
    return !!localStorage.getItem('disableIntro')
}

export const enableIntro = (): void => {
    localStorage.removeItem('disableIntro')
}
