import React from 'react'
import PropTypes from 'prop-types'
import includes from 'lodash/includes'

const Image = props => {
    const isExternalImage = includes(props.src, 'http')
    return (
        <img
            {...props}
            src={isExternalImage ? props.src : require(`./${props.src}`)}
            alt={props.alt}
        />
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
