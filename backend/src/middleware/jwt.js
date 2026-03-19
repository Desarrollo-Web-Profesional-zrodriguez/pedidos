import { expressjwt } from "express-jwt";


/*
 * Middleware para proteger rutas que requieren autenticación mediante JWT.
 * Utiliza express-jwt para verificar el token JWT en las solicitudes entrantes.
 * El token se espera en el encabezado Authorization con el formato "Bearer <token>"
 * requireAuth: Middleware que verifica el token JWT y permite el acceso a rutas protegidas si el token es válido.
 * El secreto para verificar el token se obtiene de la variable de entorno JWT_SECRET.
 * Algoritmo de firma utilizado para el token JWT es HS256.
 * Si el token es válido, la información del usuario se adjunta al objeto req.user para su uso en las rutas protegidas.
 * Si el token es inválido o no se proporciona, se devuelve un error de autenticación.
 */
export const requireAuth = expressjwt({
  secret: () => process.env.JWT_SECRET,
  algorithms: ["HS256"],
});
