import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TweetEmbed from 'react-tweet-embed'
import includes from 'lodash/includes'
import qs from 'query-string'
import split from 'lodash/split'
import last from 'lodash/last'

const Image = props => {
    const isExternalImage = includes(props.src, 'http')
    const isYoutubeLink = includes(props.src, 'youtube.com')
    if (isYoutubeLink) {
        const {
            query: { v: videoId },
        } = qs.parseUrl(props.src)
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
                src={isExternalImage ? props.src : require(`./${props.src}`)}
                alt={props.alt}
            />
        </div>
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
}

const Pre = props => <pre className="line-numbers">{props.children}</pre>

const Code = styled.code`
    font-size: 15px;
    background-color: ${props => props.theme.colors.foreground};
    margin: 0 3px;
    padding: 1px 7px;
    color: ${props => props.theme.colors.background};
    border-radius: 2px;
`

const CustomLink = props => {
    const isTwitterLink = includes(props.href, 'https://twitter.com')
    if (isTwitterLink) {
        const tweetId = last(split(props.href, '/status/'))
        return <TweetEmbed id={tweetId} options={{ align: 'center' }} />
    }
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            {props.children}
        </a>
    )
}

export default {
    img: Image,
    pre: Pre,
    code: Code,
    a: CustomLink,
}
