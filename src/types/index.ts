export type AppConfig = {
    SITE_URL: string
    DISQUS_SHORT_NAME: string
}

export interface Dictionary<T> {
    [Key: string]: T
}

export type ChildrenType = React.ReactNode | Array<React.ReactNode>
