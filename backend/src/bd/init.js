import mongoose from "mongoose";

export function initBaseDeDatos() {
    // Usamos variables individuales que configuraremos en Railway
    const user = process.env.MONGOUSER || 'mongo';
    const pass = process.env.MONGOPASSWORD || 'DQuTqLZUSasWUsfyNkcBfRjazrPzbAxd';
    const host = process.env.MONGOHOST || 'mongodb.railway.internal';
    const port = process.env.MONGOPORT || '27017';
    const dbName = 'pedidos';

    // Construcción segura con encodeURIComponent para evitar errores de símbolos
    const uri = `mongodb://${user}:${encodeURIComponent(pass)}@${host}:${port}/${dbName}?authSource=admin`;

    mongoose.connection.on("error", (error) => {
        console.error("❌ Error de conexión a la Base de Datos:", error.message);
    });

    mongoose.connection.on("open", () => {
        console.info("✅ Conectado exitosamente a MongoDB (Railway)");
    });

    return mongoose.connect(uri);
}