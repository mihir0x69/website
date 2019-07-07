import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import BlogTemplate from 'components/common/BlogTemplate'
import Loader from 'components/common/Loader'
import paths from 'constants/paths'

const getContents = async id => {
    const { default: metadata } = await import(`./${id}/metadata.json`)
    const { default: content } = await import(`./${id}/index.md`)

    return {
        metadata,
        content,
    }
}

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
        return <Loader />
    }

    return <BlogTemplate {...data} />
}

export default Blog
