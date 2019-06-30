import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Prism from 'prismjs'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import Timestamp from 'components/common/Timestamp'
import remarkReactComponents from './remarkReactComponents'

const Blog = ({ metadata, content }) => {
    useEffect(Prism.highlightAll, [content])

    if (!content || !metadata) {
        return null
    }

    return (
        <div style={{ marginBottom: 50 }}>
            <h1>{metadata.title}</h1>
            <Timestamp
                timestamp={metadata.timestamp}
                readingStats={metadata.readingStats}
            />
            {
                unified()
                    .use(parse)
                    .use(remark2react, {
                        sanitize: false,
                        remarkReactComponents,
                    })
                    .processSync(content).contents
            }
        </div>
    )
}

Blog.propTypes = {
    content: PropTypes.string.isRequired,
}

export default Blog
