import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    font-family: ${props => props.theme.fonts.retro};
`

const Places = () => (
    <>
        <Title>Places</Title>
        <p>{'Places I have visited.'}</p>
    </>
)

export default Places
