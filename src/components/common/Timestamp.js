import React from 'react'
import range from 'lodash/range'
import rt from 'reading-time'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)
const formatDate = date => dayjs(date, 'DD-MM-YYYY').format('MMMM D, YYYY')
const SLEEPY = '😴'
const CRAPPER = '🚽'

const Timestamp = ({ content, timestamp }) => {
    const readingTime = rt(content)
    let rtIndicator = SLEEPY
    if (readingTime.minutes < 7) {
        rtIndicator = range(readingTime.minutes).map(() => CRAPPER)
    }
    return (
        <p>{formatDate(timestamp)} • {rtIndicator} {readingTime.text}</p>
    )
}

export default Timestamp
