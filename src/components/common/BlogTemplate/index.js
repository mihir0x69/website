import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Prism from 'prismjs'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import remarkReactComponents from './remarkReactComponents'

const Blog = props => {
    useEffect(Prism.highlightAll, [props.markdown])

    if (!props.markdown) {
        return null
    }

    return (
        <React.Fragment>
            {
                unified()
                    .use(parse)
                    .use(remark2react, {
                        sanitize: false,
                        remarkReactComponents,
                    })
                    .processSync(props.markdown).contents
            }
        </React.Fragment>
    )
}

Blog.propTypes = {
    markdown: PropTypes.string.isRequired,
}

export default Blog
