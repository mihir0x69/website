import React, { useEffect } from 'react'
import styled from 'styled-components'
import { DiscussionEmbed } from 'disqus-react'
import { Link } from 'react-router-dom'
import kebabCase from 'lodash/kebabCase'
import Prism from 'prismjs'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import Timestamp from 'components/Timestamp'
import paths from 'constants/paths'
import { Metadata } from 'types'
import remarkReactComponents from './remarkReactComponents'
const { SITE_URL, DISQUS_SHORT_NAME } = require('config')

const ENABLE_DISQUS = false

const Container = styled.div`
    margin-bottom: 50px;
    padding: 0 10px;
`

type Props = {
    metadata: Metadata
    content: string
}

type DisqusConfig = {
    url: string
    identifier: string
    title: string
}

const renderDisqus = (config: DisqusConfig) => {
    return (
        ENABLE_DISQUS && (
            <DiscussionEmbed shortname={DISQUS_SHORT_NAME} config={config} />
        )
    )
}

const Blog: React.FC<Props> = ({ metadata, content }: Props) => {
    useEffect(Prism.highlightAll, [content])

    if (!content || !metadata) {
        return null
    }

    const tags = metadata.tags && (
        <p>
            {'Tags: '}
            {metadata.tags.map((tag, idx) => (
                <span key={idx}>
                    <Link key={idx} to={`${paths.BLOGS}/tag/${kebabCase(tag)}`}>
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
            {renderDisqus(disqusConfig)}
        </Container>
    )
}

export default Blog
