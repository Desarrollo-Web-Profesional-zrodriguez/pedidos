import express from 'express'
import cors from 'cors'

import { pedidosRoutes } from './rutas/pedidos.js'
import { usuarioRoutes } from './rutas/usuarios.js'

// crear la aplicación Express
const app = express()

// configurar CORS - permitir todos los orígenes
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(cors(corsOptions))

// body parser
app.use(express.json())

// Configurar rutas
pedidosRoutes(app)
usuarioRoutes(app)

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Hola from Express!')
})

export { app }