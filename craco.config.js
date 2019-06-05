module.exports = {
    babel: {
        "plugins": ["babel-plugin-styled-components"]
    },
    webpack: {
        configure: (config) => {
            config.resolve.modules.push('src')
            return config
        }
    }
}