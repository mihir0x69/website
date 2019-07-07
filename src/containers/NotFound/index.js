import React from 'react'
import styled from 'styled-components'
import lanceLyingDown from 'media/LanceLayingDownR.png'

const Container = styled.div`
    position: absolute;
    top: 100px;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
`

const Title = styled.p`
    font-family: ${props => props.theme.fonts.retro}
`

const NotFound = () => (
    <Container>
        <Title>
            {'404 Not Found'}
        </Title>
        <img src={lanceLyingDown} alt="Not found" />
    </Container>
)

export default NotFound