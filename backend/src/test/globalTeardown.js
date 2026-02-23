/**
 * @description Archivo de configuración global para Jest, se ejecuta despues de todas las pruebas
 * @author Zahir Andrés Rodríguez Mora
 * @version 1.0.0
 */

export default async function globalTeardown(){
    await global.__MONGOINSTANCE.stop() // Detiene la instancia de MongoSB después de todas las pruebas
}