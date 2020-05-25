export type AppConfig = {
    SITE_URL: string
    DISQUS_SHORT_NAME: string
}

export interface Dictionary<T> {
    [Key: string]: T
}

export type ChildrenType = React.ReactNode | Array<React.ReactNode>

export type ReadingStats = {
    text: string
    minutes: number
    time: number
    words: number
}

export type Metadata = {
    title: string
    teaser: string
    cover?: string
    timestamp: string
    readingStats: ReadingStats
    tags: string[]
}
