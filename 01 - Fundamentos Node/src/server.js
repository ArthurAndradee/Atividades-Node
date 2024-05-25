// CommonsJS => Require
// const http = require('http')

import http from 'node:http'
// ESMOdules => import/export

// - Criar usuários
// - Listagem de usuários
// - Edição de usuários
// - Remoção de usuários
//
// - HTTP
//     - Método HTTP
//     - URL

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar um recurso do backend
// POST => Criar um recurso do backend
// PUT => Atualizar um recurso do backend
// PATCH => Atualizar uma informação específica ou de um recurso do backend
// DELETE  => Deletar um recurso do backend

// GET /users => Buscando usuários do back-end
// POST /users => Criar um usuário no back-end

// Stateful - Stateless

// JSON - Javascript Object Notation

// Cabeçalhos (Requisição/resposta) => Metadados

// HTTP Status Code

const users = []

const server = http.createServer(async (req, res) => {
    const { method, url } = req

    const buffers = []

    for await (const chunk of req) {
        buffers.push(chunk)
    }

    try {
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch {
        req.body = null
    }
    
    if (method === 'GET' && url === '/users') {
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }
    
    if (method === 'POST' && url === '/users') {
        const { name, email } = req.body

        users.push({
            id: '1',
            name,
            email
        })

        return res.writeHead(201).end()
    }

    if (method === 'DELETE' && url === '/users') {
        return res.end('Remoção de usuário')
    }

    return res.writeHead(404).end()
})

server.listen(3333)
// localhost:3333