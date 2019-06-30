const fs = require('fs')
const path = require('path')
const find = require('lodash/find')
const chalk = require('chalk')
const readingTime = require('reading-time')

const BASE_PATH = './src/containers/Blogs'
const ENCODING = 'UTF-8'

const info = chalk.blue

const files = fs.readdirSync(BASE_PATH)
files.forEach(fileName => {
    const dirPath = path.join(BASE_PATH, fileName)
    const stat = fs.lstatSync(dirPath);
    if (stat.isDirectory()) {
        console.log(info(`Reading ${fileName} directory`))
        const children = fs.readdirSync(dirPath)
        const markdownFileName = find(children, c => c.includes('.md'))

        console.log(info(`Reading metadata`))
        const metadataFilePath = path.join(dirPath, 'metadata.json')
        const metadata = fs.readFileSync(metadataFilePath, ENCODING)
        const obj = JSON.parse(metadata)

        console.log(info(`Found ${markdownFileName}`))
        const contents = fs.readFileSync(path.join(dirPath, markdownFileName), ENCODING)

        console.log(info(`Calculating reading stats`))
        const readingStats = readingTime(contents)
        obj.readingStats = readingStats
        console.log(info(`Writing stats back to metadata`))
        fs.writeFileSync(metadataFilePath, JSON.stringify(obj, null, 4))

        console.log(chalk.green.inverse('DONE!'))
    }
})
