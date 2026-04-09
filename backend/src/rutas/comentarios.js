import rateLimit from 'express-rate-limit'
import { body, validationResult } from 'express-validator'

// Configuración del Rate Limiting
const limiterComentarios = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minuto
    max: 10, // Límite de 10 peticiones por IP
    message: { error: "Demasiadas peticiones. Intenta de nuevo en un minuto." }
})

// Middlewares de Validación y Sanitización
const validacionesComentario = [
    body('puntuacion')
        .isInt()
        .withMessage('La puntuación debe ser un número entero.'),
    
    body('texto')
        .isLength({ max: 200 })
        .withMessage('El comentario no puede superar los 200 caracteres.')
        .escape() 
]

/**
 * Función que define las rutas para comentarios
 * @param {*} app
 */
export function comentariosRoutes(app) {
    // Definición de la ruta POST aplicando los middlewares
    app.post('/api/v1/comentarios', limiterComentarios, validacionesComentario, async (req, res) => {
        try {
            const errores = validationResult(req)
            if (!errores.isEmpty()) {
                return res.status(400).json({ errores: errores.array() })
            }

            const { puntuacion, texto } = req.body

            // db

            return res.status(201).json({
                mensaje: "Comentario recibido y sanitizado correctamente",
                datosRecibidos: {
                    puntuacion,
                    texto
                }
            })
        } catch (err) {
            console.error('Error procesando el comentario - ', err)
            return res.status(500).end()
        }
    })
    app.get('/api/v1/comentarios/test', (req, res) => {
    res.json({ mensaje: "API Segura funcionando detrás de Nginx con TLS 1.3" })
})
}