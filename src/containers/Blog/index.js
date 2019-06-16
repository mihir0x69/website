import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0 auto;
    padding: 40px 10px;
`

const Title = styled.h2`
    font-family: ${props => props.theme.fonts.retro};
    margin: 15px 0;
    line-height: 1.5;
`

const Blog = () => {
    return (
        <Container>
            <Title>The Millennial Programmer</Title>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Container>
    )
}

export default Blog
