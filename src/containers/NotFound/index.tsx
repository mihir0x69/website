import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
    top: 100px;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
`

const Title = styled.p`
    font-family: ${props => props.theme.fonts.heading};
`

const NotFound: React.FC = () => (
    <Container>
        <Title>{'404 Not Found'}</Title>
        <img src="media/LanceLayingDownR.png" alt="Not found" />
    </Container>
)

export default NotFound
