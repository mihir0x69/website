const _ = require('lodash')
const path = require('path')

module.exports = {
    webpack: {
        configure: (config, { env }) => {
            config.resolve.modules.push('src')
            config.resolve.alias.config = path.resolve('src', 'config', `${env}.js`)

            const rules = _.find(config.module.rules, x => x.oneOf)
            const fileLoaderRuleIndex = _.findIndex(
                rules.oneOf, x => _.includes(x.loader, 'file-loader'))
            rules.oneOf.splice(fileLoaderRuleIndex, 0, {
                test: /\.md$/,
                loader: 'raw-loader'
            })

            const appCodeBabelLoader = _.find(
                rules.oneOf, x => _.includes(x.loader, 'babel-loader'))
            appCodeBabelLoader.options.plugins.unshift(
                'babel-plugin-styled-components',
                ["babel-plugin-prismjs", {
                    "languages": ["javascript", "jsx", "css", "markup", "fsharp", "csharp"],
                    "plugins": ["line-numbers"],
                    "theme": "default",
                    "css": true
                }]
            )
            return config
        }
    },
    eslint: {
        configure: {
            rules: {
                "jsx-a11y/accessible-emoji": "off"
            }
        }
    }
}