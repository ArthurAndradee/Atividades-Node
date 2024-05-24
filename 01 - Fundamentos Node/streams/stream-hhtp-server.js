import http from 'node:http'
import { Transform } from 'node:stream'

class ToInverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1

        console.log(transformed)

        callback(null, Buffer.from(String(transformed)))
    }
}

// req = ReadableStream
// rep = WritableStream

const server = http.createServer((req, res) => {
    return req.pipe(new ToInverseNumberStream().pipe(res))
})

server.listen(3334)