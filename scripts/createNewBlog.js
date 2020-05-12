const fs = require('fs')
const kebabCase = require('lodash/kebabCase')
const chalk = require('chalk')

const info = chalk.blue
const error = chalk.red
const success = chalk.green
const BASE_PATH = './src/containers/Blogs/'
const argv = require('minimist')(process.argv.slice(2))

const exit = message => {
    console.log(message)
    process.exit(1)
}

const createMetadata = (title) => JSON.stringify({
    title,
    teaser: '',
    timestamp: new Date(),
    readingStats: {},
    tags: []
}, null, 4)

if (!argv.name) {
    exit('Required argument: --name')
}

const fullPath = BASE_PATH + kebabCase(argv.name)

if (fs.existsSync(fullPath)) {
    console.log(error.inverse('ERROR'))
    exit('A blog already exists by that name')
} else {
    console.log(info('Creating directory'))
    fs.mkdirSync(fullPath)

    console.log(info('Creating empty blog'))
    fs.writeFileSync(fullPath + '/index.md', '')

    console.log(info('Writing metadata'))
    fs.writeFileSync(fullPath + '/metadata.json', createMetadata(argv.name))

    console.log(success.inverse('DONE!'))
}