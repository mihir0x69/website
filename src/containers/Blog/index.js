import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0 auto;
    padding: 0 20px;
`

const Title = styled.h2`
    font-family: ${props => props.theme.fonts.retro};
    margin: 15px 0 5px 0;
    line-height: 1.5;
`

const Hr = styled.hr`
    border: none;
    margin: 15px 0 50px 0;
    height: 1px;
    background-color: gray;
`

const Blog = () => {
    return (
        <Container>
            <Title>The Millennial Programmer️️️</Title>
            <p>⚡ Personal blog by me. I discuss tech, politics and life.</p>
            <Hr />
            <h1>FSharp: Learning to use FAKE and Paket</h1>
            <p>March 25, 2019 • ☕️ 4 min read</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Hr />
            <h1>Porting enterprise React app to create-react-app</h1>
            <p>March 25, 2019 • ☕️ 4 min read</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Hr />
        </Container>
    )
}

export default Blog
