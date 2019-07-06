import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import BlogTemplate from 'components/common/BlogTemplate'
import paths from 'constants/paths'
import loaderImage from 'media/LanceWalkingR.gif'

const getContents = async id => {
    const { default: metadata } = await import(`./${id}/metadata.json`)
    const { default: content } = await import(`./${id}/index.md`)

    return {
        metadata,
        content,
    }
}

const Loading = styled.div`
    font-family: ${props => props.theme.fonts.retro};
    position: fixed;
    top: 100px;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LanceWalking = styled.img.attrs({ 
    src: loaderImage,
    alt: 'Loading'
})`
    margin: 0 20px;
`

const Blog = props => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    useEffect(() => {
        getContents(props.match.params.id)
            .then(setData)
            .catch(setError)
    }, [props.match.params.id])

    if (error) {
        return <Redirect to={paths.BLOGS} />
    }

    if (!data) {
        return (
            <Loading>
                <LanceWalking/>
                {'Loading...'}
            </Loading>
        )
    }

    return <BlogTemplate {...data} />
}

export default Blog
