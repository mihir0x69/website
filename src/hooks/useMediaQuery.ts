import React from 'react'

const useMediaQuery = (query: string) => {
    const mediaQuery = window.matchMedia(query)
    const [match, setMatch] = React.useState(!!mediaQuery.matches)

    React.useEffect(() => {
        const handler = () => setMatch(!!mediaQuery.matches)
        mediaQuery.addListener(handler)
        return () => mediaQuery.removeListener(handler)
    }, []) // eslint-disable-line

    return match
}

export default useMediaQuery
