import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from 'components/GlobalStyles'
import * as StorageManager from 'utils/StorageManager'
import themes from 'constants/themes'
import Navigation from './Navigation'

const Container = styled.div`
    max-width: 980px;
    min-height: calc(100vh - 50px);
    padding: 20px;
    margin: 0 auto;
`

const Footnote = styled.footer`
    width: 100%;
    height: 50px;

    > p {
        text-align: center;
        font-family: ${props => props.theme.fonts.heading};
        font-size: 12px;
    }
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
                <Footnote>
                    <p>
                        {'Edit this on '}
                        <a href="https://github.com/KarandikarMihir/website">
                            {'Github'}
                        </a>
                        {' 💙'}
                    </p>
                </Footnote>
            </React.Fragment>
        </ThemeProvider>
    )
}

export default Layout
