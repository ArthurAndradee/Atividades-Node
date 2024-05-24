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

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url === '/users') {

        // Early Return
        return res.end('Listagem de usuários')
    }
    
    if (method === 'POST' && url === '/users') {
        return res.end('Criação de usuário')
    }

    if (method === 'DELETE' && url === '/users') {
        return res.end('Remoção de usuário')
    }

    return res.end('WE BALL')
})

server.listen(3333)
// localhost: 3333