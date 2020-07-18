const fs = require('fs')

const host = 'https://mihir.life/'
const urls = ['', 'blogs', 'places', 'work', 'whoami']

fs.writeFileSync('./routes.txt', urls.map(u => `${host}${u}`).join('\n'))