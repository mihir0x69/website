const RSS = require('rss')
const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const dayjs = require('dayjs')
const customParseFormat = require('dayjs/plugin/customParseFormat')

dayjs.extend(customParseFormat)

const ROOT_URL = 'https://mihir.life'
const ROOT_FOLDER = path.join(process.cwd(), 'src', 'containers', 'Blogs')
const FILE_NAME = 'metadata.json'
const AUTHOR = 'Mihir Karandikar'

const buildUrl = qualifier => `${ROOT_URL}/${qualifier}`

const feed = new RSS({
    title: "Mihir Karandikar's Blog",
    description: 'Personal Blog by Mihir Karandikar',
    feed_url: buildUrl('rss.xml'),
    site_url: buildUrl('blogs'),
    image_url: buildUrl('faf6b00c-82ec-41c9-8109-fc2066e3c085.jpg'),
    managingEditor: 'Mihir Karandikar',
    webMaster: 'Mihir Karandikar',
    language: 'en-US',
    categories: ['Technology', 'Life', 'Politics'],
})

let items = []

const traverseDir = (dir) => {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file)
        if (fs.lstatSync(fullPath).isDirectory()) {
            traverseDir(fullPath)
        } else {
            if (file === FILE_NAME) {
                const { title, teaser: description, tags: categories, timestamp } = JSON.parse(fs.readFileSync(fullPath))
                const date = dayjs(timestamp, 'DD-MM-YYYY', true).add(1, 'day')
                items.push({
                    title,
                    description,
                    url: buildUrl(`blog/${_.kebabCase(title)}`),
                    categories,
                    author: AUTHOR,
                    date
                })
            }
        }
    })
}

traverseDir(ROOT_FOLDER)
items = _.orderBy(items, x => x.date, ['desc'])

items.forEach(x => feed.item(x))


const xml = feed.xml({ indent: true })

fs.writeFileSync(path.join(process.cwd(), 'public', 'rss.xml'), xml)