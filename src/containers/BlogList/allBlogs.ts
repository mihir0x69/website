import { Metadata } from 'types'

const context = require.context('../Blogs/', true, /metadata.json$/)

const allBlogs = context
    .keys()
    .map(context)
    .sort((a: any, b: any) => {
        const aa = a.timestamp
            .split('-')
            .reverse()
            .join()
        const bb = b.timestamp
            .split('-')
            .reverse()
            .join()
        return aa < bb ? 1 : aa > bb ? -1 : 0
    })

export default allBlogs as Metadata[]
