const fs = require('fs')
const path = require('path')
const find = require('lodash/find')
const chalk = require('chalk')
const readingTime = require('reading-time')

const BASE_PATH = path.join(process.cwd(), 'src', 'containers', 'Blogs')
const ENCODING = 'UTF-8'

const info = chalk.blue
const error = chalk.red

const files = fs.readdirSync(BASE_PATH)
files.forEach(fileName => {
    const dirPath = path.join(BASE_PATH, fileName)
    const stat = fs.lstatSync(dirPath);
    if (stat.isDirectory()) {
        console.log(info(`Reading ${fileName} directory`))
        const children = fs.readdirSync(dirPath)
        const markdownFileName = find(children, c => c.includes('.md'))

        console.log(info(`Found ${markdownFileName}`))
        const markdownFilePath = path.join(dirPath, markdownFileName)
        if (!fs.existsSync(markdownFilePath)) {
            console.log(error.inverse('ERROR'))
            console.log(error('Markdown file not found'))
            process.exit(1)
        }
        const contents = fs.readFileSync(markdownFilePath, ENCODING)

        console.log(info(`Reading metadata`))
        const metadataFilePath = path.join(dirPath, 'metadata.json')
        if (!fs.existsSync(metadataFilePath)) {
            console.log(error.inverse('ERROR'))
            console.log(error('Metadata file not found'))
            process.exit(1)
        }
        const metadata = fs.readFileSync(metadataFilePath, ENCODING)
        const obj = JSON.parse(metadata)

        console.log(info(`Calculating reading stats`))
        const readingStats = readingTime(contents)
        obj.readingStats = readingStats
        console.log(info(`Writing stats back to metadata`))
        fs.writeFileSync(metadataFilePath, JSON.stringify(obj, null, 4))

        console.log(chalk.green.inverse('DONE!'))
    }
})
