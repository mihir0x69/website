import React, { useEffect } from 'react'
import styled from 'styled-components'
import { DiscussionEmbed } from 'disqus-react'
import { Link } from 'react-router-dom'
import kebabCase from 'lodash/kebabCase'
import Prism from 'prismjs'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import { Helmet } from 'react-helmet'
import Timestamp from 'components/Timestamp'
import paths from 'constants/paths'
import { Metadata } from 'types'
import remarkReactComponents from './remarkReactComponents'
const { SITE_URL, DISQUS_SHORT_NAME } = require('config').default

const Container = styled.article`
    margin-bottom: 50px;
    padding: 0 10px;
`

const AdblockNotice = styled.div`
    padding: 20px;
    border: 2px solid ${props => props.theme.colors.foreground};
    border-radius: 5px;
    font-family: ${props => props.theme.fonts.heading};
    margin: 50px 0;
    font-weight: bold;
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

const DisqusThread: React.FC<DisqusConfig> = config => {
    return (
        <>
            <AdblockNotice>
                {
                    'Please disable AdBlock and other extensions to read this discussion thread :)'
                }
            </AdblockNotice>
            <DiscussionEmbed shortname={DISQUS_SHORT_NAME} config={config} />
        </>
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
        <>
            <Helmet>
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.teaser} />
                <meta property="og:image" content={metadata.cover} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="mihir.life" />
                <meta property="og:type" content="article" />

                <meta name="twitter:title" content={metadata.title} />
                <meta name="twitter:site" content="@KarandikarMihir" />
                <meta name="twitter:description" content={metadata.teaser} />
                <meta name="twitter:image" content={metadata.cover} />
                <meta name="twitter:card" content="summary" />
            </Helmet>
            <Container>
                <header>
                    <h1>{metadata.title}</h1>
                    <Timestamp
                        timestamp={metadata.timestamp}
                        readingStats={metadata.readingStats}
                    />
                </header>
                <section>
                    {
                        unified()
                            .use(parse)
                            .use(remark2react, {
                                sanitize: false,
                                remarkReactComponents,
                            })
                            .processSync(content).contents
                    }
                </section>
                <section>
                    {tags}
                </section>
                <section>
                    <p>
                        <Link to={paths.BLOGS}>{'← Back to other blogs'}</Link>
                    </p>
                </section>
                <section>
                    <DisqusThread {...disqusConfig} />
                </section>
            </Container>
        </>
    )
}

export default Blog
