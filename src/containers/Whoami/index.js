import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    font-family: ${props => props.theme.fonts.retro};
`

const Whoami = () => {
    return (
        <div>
            <Title>{'whoami'}</Title>
            <p>{'Regular dude from India'}</p>
        </div>
    )
}

export default Whoami
