import React from 'react';
import range from 'lodash/range';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat)
const formatDate = (date: Date) => dayjs(date, 'DD-MM-YYYY').format('MMMM D, YYYY')
const SLEEPY = '😴'
const CRAPPER = '🚽'

type ReadingStats = {
    minutes: number
    text: string
}

interface ComponentProps {
    readingStats: ReadingStats
    timestamp: Date
}

const Timestamp: React.FC<ComponentProps> = ({ readingStats, timestamp }: ComponentProps) => {
    let rtIndicator: string = readingStats.minutes > 7 
    ? range(readingStats.minutes).map(() => CRAPPER).join('')
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
