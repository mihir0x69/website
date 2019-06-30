import React from 'react'
import range from 'lodash/range'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)
const formatDate = date => dayjs(date, 'DD-MM-YYYY').format('MMMM D, YYYY')
const SLEEPY = '😴'
const CRAPPER = '🚽'

const Timestamp = ({ readingStats, timestamp }) => {
    let rtIndicator = SLEEPY
    if (readingStats.minutes < 7) {
        rtIndicator = range(readingStats.minutes).map(() => CRAPPER)
    }
    return (
        <p>
            <b>{formatDate(timestamp)} • {rtIndicator} {readingStats.text}</b>
        </p>
    )
}

export default Timestamp
