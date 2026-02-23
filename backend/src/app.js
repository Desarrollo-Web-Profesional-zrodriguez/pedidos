import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import { pedidosRoutes } from './rutas/pedidos.js'

// crear la aplicación Express
const app = express()
// configurar middlewares
app.use(cors())
app.use(bodyParser.json())

// Configurar rutas
pedidosRoutes(app)

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Hola from Express!')
})

export { app }