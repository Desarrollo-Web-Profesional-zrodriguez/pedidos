import mongoose from 'mongoose'
import { beforeAll } from '@jest/global'
import { initBaseDatos } from '../bd/init.js'

/**
 * Archivo de configuración para Jest que se ejecuta después de configurar el entorno de pruebas.
 * Aqui se incializa la base de datos antes de ejecutar las pruebas y se desconecta después de que todas las pruebas hayan finalizado
 */

beforeAll(async () => {
    await initBaseDatos()
})

/**
 * Después de que todas las pruebas hayan finalziado, se desconecta de la base de datos para liberar recursos
 */

afterAll(async () => {
    await mongoose.disconnect()
})