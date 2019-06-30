import React, { useEffect } from 'react'
import range from 'lodash/range'
import PropTypes from 'prop-types'
import Prism from 'prismjs'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import dayjs from 'dayjs'
import rt from 'reading-time'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import remarkReactComponents from './remarkReactComponents'

dayjs.extend(customParseFormat)
const formatDate = date => dayjs(date, 'DD-MM-YYYY').format('MMMM D, YYYY')
const SLEEPY = '😴'
const CRAPPER = '🚽'

const Blog = ({ metadata, content }) => {
    useEffect(Prism.highlightAll, [content])

    if (!content || !metadata) {
        return null
    }

    const readingTime = rt(content)
    let rtIndicator = SLEEPY
    if (readingTime.minutes < 7) {
        rtIndicator = range(readingTime.minutes).map(() => CRAPPER)
    }

    return (
        <div style={{ marginBottom: 50 }}>
            <h1>{metadata.title}</h1>
            <p>{formatDate(metadata.timestamp)} • {rtIndicator} {readingTime.text}</p>
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
