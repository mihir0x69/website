import React from 'react'
import PropTypes from 'prop-types'
import includes from 'lodash/includes'
import qs from 'query-string'

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

export default {
    img: Image,
    pre: Pre,
}
