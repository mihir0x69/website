import { Dictionary } from 'types'

const BLOGS_BASE = '/blogs'

const paths: Dictionary<string> = {
    ROOT: '/',
    MENU: '/menu',
    BLOGS: BLOGS_BASE,
    BLOGS_FILTERED_BY_TAG: `${BLOGS_BASE}/tag/:tag`,
    BLOGS_FILTERED_BY_TIMESTAMP: `${BLOGS_BASE}/ts/:timestamp`,
    BLOG: '/blog/:id',
    PLACES: '/places',
    WHOAMI: '/whoami',
    WORK: '/work'
}

export default paths
