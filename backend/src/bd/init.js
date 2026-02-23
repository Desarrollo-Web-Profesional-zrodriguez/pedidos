import mongoose from "mongoose";

// Define una función para inicializar la conexión a la base de datos
export function initBaseDeDatos() {
    const DATABASE_URL = process.env.DATABASE_URL;

    // Configura los eventos de conesxión de Mongoose
    mongoose.connection.on("error", (error) =>{
        console.error("Error de conecxión a la Base de Datos: ", error);
    });

    // Evento para cuando la conexión se abre exitosamente
    mongoose.connection.on("open", ()=>{
        console.info("Exitosamente conectado a la base de datos: ", DATABASE_URL);
    });

    // Inicia la conexión a la base de datos utilziando Monngoose
    const conexion = mongoose.connect(DATABASE_URL);
    return conexion;
}