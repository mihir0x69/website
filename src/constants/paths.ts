import { Dictionary } from 'types'

const paths: Dictionary<string> = {
    ROOT: '/',
    MENU: '/menu',
    BLOGS: '/blogs',
    BLOGS_PATH: '/blogs/:tag?',
    BLOG: '/blog/:id',
    PLACES: '/places',
    WHOAMI: '/whoami',
}

export default paths
