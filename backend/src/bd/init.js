import mongoose from "mongoose";

export function initBaseDeDatos() {
    // 1. Obtenemos la URL de Railway
    let url = process.env.DATABASE_URL;

    // 2. Si la URL existe, vamos a "escapar" los caracteres especiales 
    // para que el arroba (@) o los palitos (|) no rompan la conexión.
    if (url && url.includes(':') && url.includes('@')) {
        const protocol = url.split('://')[0];
        const rest = url.split('://')[1];
        const auth = rest.split('@')[0];
        const host = rest.split('@')[1];
        
        const [user, password] = auth.split(':');
        
        // Reconstruimos la URL con la contraseña codificada
        url = `${protocol}://${user}:${encodeURIComponent(password)}@${host}`;
    }

    mongoose.connection.on("error", (error) => {
        console.error("❌ Error de conexión a la Base de Datos: ", error);
    });

    mongoose.connection.on("open", () => {
        console.info("✅ Exitosamente conectado a la base de datos");
    });

    // Iniciamos la conexión
    return mongoose.connect(url);
}