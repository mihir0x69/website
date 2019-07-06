import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import find from 'lodash/find'
import startCase from 'lodash/startCase'
import kebabCase from 'lodash/kebabCase'
import Timestamp from 'components/common/Timestamp'
import paths from 'constants/paths'

const context = require.context('../Blogs/', true, /metadata.json$/)
const allBlogs = context
    .keys()
    .map(context)
    .sort((a, b) => {
        const aa = a.timestamp.split('-').reverse().join()
        const bb = b.timestamp.split('-').reverse().join()
        return aa < bb ? 1 : (aa > bb ? -1 : 0)
    })

const Container = styled.div`
    margin: 0 auto;
    padding: 0 20px;
`

const Title = styled.h2`
    font-family: ${props => props.theme.fonts.retro};
    margin: 15px 0 5px 0;
    line-height: 1.5;
`

const Hr = styled.hr`
    border: none;
    margin: 15px 0 50px 0;
    height: 1px;
    background-color: gray;
`

const BlogTitle = styled(Link)`
    color: ${({ theme }) => theme.colors.foreground} !important;
    text-decoration: none !important;
`

const Blog = props => {
    const {
        match: {
            params: { tag },
        },
    } = props
    const visibleBlogs = tag
        ? allBlogs.filter(b => find(b.tags, t => kebabCase(t) === tag))
        : allBlogs
    return (
        <Container>
            <Title>{'The Millennial Programmer️️️'}</Title>
            <p>
                {'⚡ Personal blog by me. I discuss tech, politics and life.'}
            </p>
            <Hr />
            {tag && (
                <p>
                    {`Blogs tagged as `}
                    <b>{startCase(tag)}</b>
                    {':'}
                </p>
            )}
            {visibleBlogs.length === 0 && (
                <p>
                    {'No blogs found. '}
                    <Link to={paths.BLOGS}>{'See all blogs.'}</Link>
                </p>
            )}
            {visibleBlogs.map(
                ({ title, teaser, timestamp, readingStats }, idx) => (
                    <React.Fragment key={idx}>
                        <BlogTitle to={`/blog/${kebabCase(title)}`}>
                            <h1>{title}</h1>
                        </BlogTitle>
                        <Timestamp
                            timestamp={timestamp}
                            readingStats={readingStats}
                        />
                        <p>{teaser}</p>
                        <Hr />
                    </React.Fragment>
                )
            )}
        </Container>
    )
}

export default Blog
