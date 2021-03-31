import { ThemeProvider } from 'styled-components'
import themes from 'constants/themes'
import GlobalStyles from './GlobalStyles'

const Layout = ({ children }: { children: any }) => {
    return (
        <ThemeProvider theme={themes[1]}>
            <GlobalStyles />
            <base target="_blank" />
            {children}
        </ThemeProvider>
    )
}

export default Layout
