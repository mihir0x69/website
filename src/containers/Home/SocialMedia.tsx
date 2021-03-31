import React from 'react'
import styled from 'styled-components'
import { TwitterIcon, LinkedinIcon, EmailIcon } from 'react-share'
import StackOverflowIconImage from 'media/so-icon.png'

const DesktopContainer = styled.div`
    position: fixed;
    left: 40px;
    top: 45%;
    display: flex;
    flex-direction: column;

    @media (max-width: 991px) {
        display: none;
    }
`

const MobileContainer = styled.div`
    display: none;

    @media (max-width: 991px) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0;

        > a {
            margin: 0 5px;
        }
    }
`

const StackOverflowIcon = styled.div`
    width: 48.44px;
    height: 48.44px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -5px;
`

const icons = [
    {
        icon: TwitterIcon,
        title: 'Twitter',
        link: 'https://twitter.com/KarandikarMihir',
    },
    {
        icon: LinkedinIcon,
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/karandikarmihir/',
    },
    {
        icon: () => (
            <StackOverflowIcon>
                <img
                    src={StackOverflowIconImage}
                    alt="StackOverflow Icon"
                    style={{ height: 40 }}
                />
            </StackOverflowIcon>
        ),
        title: 'StackOverflow',
        link: 'https://stackoverflow.com/users/5241520/mihir',
    },
    {
        icon: EmailIcon,
        title: 'Email',
        link: 'mailto:karandikar.mihir@outlook.com',
    },
]

type IconProps = {
    icon: any
    link: string
    title: string
}

const Icon: React.FC<IconProps> = ({ icon: Component, link, title }) => (
    <a href={link} title={title} style={{ marginBottom: 10 }}>
        <Component size={50} round />
    </a>
)

export const SocialMediaDesktop = () => {
    return (
        <DesktopContainer>
            {icons.map((props, i) => (
                <Icon key={i} {...props} />
            ))}
        </DesktopContainer>
    )
}

export const SocialMediaMobile = () => {
    return (
        <MobileContainer>
            {icons.map((props, i) => (
                <Icon key={i} {...props} />
            ))}
        </MobileContainer>
    )
}
