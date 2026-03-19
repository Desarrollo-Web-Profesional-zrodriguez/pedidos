import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import { pedidosRoutes } from './rutas/pedidos.js'
import { usuarioRoutes } from './rutas/usuarios.js'

// crear la aplicación Express
const app = express()
// configurar middlewares
app.use(cors({
    origin: [
        'https://pedidos-production-bacd.up.railway.app',
        'http://localhost:5173'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(bodyParser.json())

// Configurar rutas
pedidosRoutes(app)
usuarioRoutes(app)

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Hola from Express!')
})

export { app }