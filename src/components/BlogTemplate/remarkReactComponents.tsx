import React from 'react'
import styled from 'styled-components'
import TweetEmbed from 'react-tweet-embed'
import includes from 'lodash/includes'
import qs from 'query-string'
import split from 'lodash/split'
import last from 'lodash/last'
import { ChildrenType } from 'types'

type ImageProps = {
    src: string
    alt?: string
}

const Image = ({ src, alt, ...props }: ImageProps) => {
    const isExternalImage = includes(src, 'http')
    const isYoutubeLink = includes(src, 'youtube.com')
    if (isYoutubeLink) {
        const {
            query: { v: videoId },
        } = qs.parseUrl(src)
        return (
            <iframe
                title="Youtube Video"
                style={{ width: '100%', height: 400 }}
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allowFullScreen
            />
        )
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <img
                {...props}
                style={{ maxWidth: '100%' }}
                src={isExternalImage ? src : require(`./${src}`)}
                alt={alt}
            />
        </div>
    )
}

type PreProps = {
    children: ChildrenType
}

const Pre = ({ children }: PreProps) => (
    <pre className="line-numbers">{children}</pre>
)

const Code = styled.code`
    font-size: 15px;
    background-color: ${props => props.theme.colors.foreground};
    margin: 0 3px;
    padding: 1px 7px;
    color: ${props => props.theme.colors.background};
    border-radius: 2px;
`

type CustomLinkProps = {
    href: string
    children: ChildrenType
}

const CustomLink = (props: CustomLinkProps) => {
    const isTwitterLink = includes(props.href, 'https://twitter.com')
    if (isTwitterLink) {
        const tweetId = last(split(props.href, '/status/')) || ''
        return <TweetEmbed id={tweetId} options={{ align: 'center' }} />
    }
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            {props.children}
        </a>
    )
}

const remarkReactComponents = {
    img: Image,
    pre: Pre,
    code: Code,
    a: CustomLink,
}

export default remarkReactComponents
