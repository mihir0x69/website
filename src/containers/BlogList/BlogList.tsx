import React from 'react'
import styled from 'styled-components'
import { Link, RouteComponentProps } from 'react-router-dom'
import find from 'lodash/find'
import get from 'lodash/get'
import includes from 'lodash/includes'
import startCase from 'lodash/startCase'
import kebabCase from 'lodash/kebabCase'
import Timestamp from 'components/Timestamp'
import Hr from 'components/Hr'
import paths from 'constants/paths'
import { Metadata } from 'types'
import allBlogs from './allBlogs'

const Container = styled.div`
    margin: 0 auto;
    padding: 0 10px;
`

const BlogTitle = styled(Link)`
    color: ${({ theme }) => theme.colors.foreground} !important;
    text-decoration: none !important;
`

const Blog: React.FC<RouteComponentProps> = props => {
    const tag = get(props.match, 'params.tag', '')
    const visibleBlogs: Metadata[] = tag
        ? allBlogs.filter(b => find(b.tags, t => includes(kebabCase(t), tag)))
        : allBlogs
    return (
        <Container>
            <h1>{'The Millennial Programmer️️️'}</h1>
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
