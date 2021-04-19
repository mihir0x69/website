import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    border: 2px solid ${props => props.theme.colors.foreground};
    padding: 5px 15px;
    transition: all 300ms ease-in-out;
    background-color: transparent;
    color: ${props => props.theme.colors.foreground};
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
    margin-right: 10px;
    margin-bottom: 15px;

    :hover {
        background-color: ${props => props.theme.colors.foreground};
        color: ${props => props.theme.colors.background};
    }
`

const icons = [
    {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/karandikarmihir/',
    },
    {
        title: 'StackOverflow',
        link: 'https://stackoverflow.com/users/5241520/mihir',
    },
    {
        title: 'Twitter',
        link: 'https://twitter.com/KarandikarMihir',
    },
    {
        title: 'Instagram',
        link: 'https://www.instagram.com/mihir.builds/',
    },
    {
        title: 'Email',
        link: 'mailto:karandikar.mihir@outlook.com',
    },
]

export const SocialMediaButtons = () => {
    return (
        <div style={{ marginTop: 25 }}>
            {icons.map((props, i) => (
                <a href={props.link} key={props.link}>
                    <Button key={i}>{props.title}</Button>
                </a>
            ))}
        </div>
    )
}
