import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { DiscussionEmbed } from 'disqus-react'
import { Link } from 'react-router-dom'
import kebabCase from 'lodash/kebabCase'
import Prism from 'prismjs'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import Timestamp from 'components/common/Timestamp'
import paths from 'constants/paths'
import { SITE_URL, DISQUS_SHORT_NAME } from 'config'
import remarkReactComponents from './remarkReactComponents'

const Container = styled.div`
    margin-bottom: 50px;
    padding: 0 10px;
`

const Blog = ({ metadata, content }) => {
    useEffect(Prism.highlightAll, [content])

    if (!content || !metadata) {
        return null
    }

    const tags = metadata.tags && (
        <p>
            {'Tags: '}
            {metadata.tags.map((tag, idx) => (
                <span key={idx}>
                    <Link key={idx} to={`${paths.BLOGS}/${kebabCase(tag)}`}>
                        {tag}
                    </Link>
                    {idx + 1 !== metadata.tags.length && ' • '}
                </span>
            ))}
        </p>
    )

    const blogId = kebabCase(metadata.title)
    const disqusConfig = {
        url: `${SITE_URL}/blog/${blogId}`,
        identifier: blogId,
        title: metadata.title,
    }

    return (
        <Container>
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
            {tags}
            <p>
                <Link to={paths.BLOGS}>{'← Back to other blogs'}</Link>
            </p>
            <DiscussionEmbed
                shortname={DISQUS_SHORT_NAME}
                config={disqusConfig}
            />
        </Container>
    )
}

Blog.propTypes = {
    metadata: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
}

export default Blog
