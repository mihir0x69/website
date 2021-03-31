import React, { useState, useEffect } from 'react'
import get from 'lodash/get'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import { Metadata } from 'types'
import BlogTemplate from 'components/BlogTemplate'
import Loader from 'components/Loader'
import paths from 'constants/paths'

const getContents = async (id: number) => {
    const { default: metadata } = await import(`./${id}/metadata.json`)
    const { default: content } = await import(`./${id}/index.md`)

    return {
        metadata,
        content,
    }
}

type Contents = {
    metadata: Metadata
    content: string
}

const Blog: React.FC<RouteComponentProps> = ({ match }) => {
    const [data, setData] = useState<Contents | null>(null)
    const [error, setError] = useState(false)
    const id = get(match, 'params.id')
    useEffect(() => {
        getContents(id)
            .then(setData)
            .catch(setError)
    }, [id])

    if (error) {
        return <Redirect to={paths.BLOGS} />
    }

    if (!data) {
        return <Loader />
    }

    return <BlogTemplate {...data} />
}

export default Blog
