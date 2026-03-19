import mongoose from "mongoose";

export function initBaseDeDatos() {
    let uri;

    if (process.env.MONGOHOST) {
        // Producción (Railway): construir URI con variables individuales
        const user = process.env.MONGOUSER || 'mongo';
        const pass = process.env.MONGOPASSWORD || 'DQuTqLZUSasWUsfyNkcBfRjazrPzbAxd';
        const host = process.env.MONGOHOST;
        const port = process.env.MONGOPORT || '27017';
        const dbName = 'pedidos';

        uri = `mongodb://${user}:${encodeURIComponent(pass)}@${host}:${port}/${dbName}?authSource=admin`;
        console.info("🚀 Conectando a MongoDB (Railway)...");
    } else {
        // Desarrollo local: usar DATABASE_URL del .env
        uri = process.env.DATABASE_URL || 'mongodb://localhost:27017/pedidos';
        console.info("🛠️  Conectando a MongoDB (local)...");
    }

    mongoose.connection.on("error", (error) => {
        console.error("❌ Error de conexión a la Base de Datos:", error.message);
    });

    mongoose.connection.on("open", () => {
        console.info("✅ Conectado exitosamente a MongoDB");
    });

    return mongoose.connect(uri);
}