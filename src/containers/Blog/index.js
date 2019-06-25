import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import BlogTemplate from 'components/common/BlogTemplate'
import paths from 'constants/paths'
// import md from './sample2.md'

async function getContents(id) {
    const content = await import(`./${id}.md`)
    return content.default
}

const Blog = (props) => {
    const [markdown, setMarkdown] = useState(0)
    const [error, setError] = useState(false)
    useEffect(() => {
        getContents(props.match.params.id)
        .then(setMarkdown)
        .catch(setError)
    }, [props.match.params.id])

    if (error) {
        return <Redirect to={paths.BLOGS} />
    }

    return <BlogTemplate markdown={markdown} />
}

export default Blog