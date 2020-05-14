import React from 'react'
import styled from 'styled-components'
import range from 'lodash/range'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { ReadingStats } from 'types'

dayjs.extend(customParseFormat)
const formatDate = (date: string) =>
    dayjs(date, 'DD-MM-YYYY').format('MMMM D, YYYY')
const SLEEPY = '😴'
const CRAPPER = '🚽'

interface ComponentProps {
    readingStats: ReadingStats
    timestamp: string
}

const Timestamp: React.FC<ComponentProps> = ({
    readingStats,
    timestamp,
}: ComponentProps) => {
    let rtIndicator: string =
        readingStats.minutes < 7
            ? range(readingStats.minutes)
                  .map(() => CRAPPER)
                  .join('')
            : SLEEPY

    return (
        <p>
            <b>
                {formatDate(timestamp)}
                {' • '}
                <span style={{ display: 'inline-block' }}>
                    {rtIndicator} {readingStats.text}
                </span>
            </b>
        </p>
    )
}

export default Timestamp
