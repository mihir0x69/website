import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from 'components/GlobalStyles'
import * as StorageManager from 'utils/StorageManager'
import themes from 'constants/themes'
import Navigation from './Navigation'

const Container = styled.div`
    max-width: 980px;
    margin: 0 auto;
`

type Props = {
    children: React.ReactNode | Array<React.ReactNode>
}

const Layout: React.FC<Props> = (props: Props) => {
    const [theme, setTheme] = useState(StorageManager.getTheme() || 1)
    return (
        <ThemeProvider theme={themes[theme]}>
            <React.Fragment>
                <GlobalStyles />
                <base target="_blank" />
                <Navigation theme={theme} setTheme={setTheme} />
                <Container>{props.children}</Container>
            </React.Fragment>
        </ThemeProvider>
    )
}

export default Layout
