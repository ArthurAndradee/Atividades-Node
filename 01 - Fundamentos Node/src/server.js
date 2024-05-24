// CommonsJS => Require
// const http = require('http')

import http from 'node:http'
// ESMOdules => import/export

//                            request, response
const server = http.createServer((req, res) => {
    return res.end('ATUMALACA')
})

server.listen(3333)
// localhost: 3333