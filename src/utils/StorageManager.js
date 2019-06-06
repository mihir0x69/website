export default class StorageManager {
    static setTheme(value) {
        localStorage.setItem('theme', value)
    }

    static getTheme() {
        return +localStorage.getItem('theme')
    }
}
