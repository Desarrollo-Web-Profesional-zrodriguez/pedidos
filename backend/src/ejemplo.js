import dotenv from "dotenv"
dotenv.config()

import { initBaseDeDatos } from "./bd/init.js"
import { Pedido } from './bd/modelos/pedido.js'

await initBaseDeDatos()

/**
 * Ejemplo de creacion, actualización y consutla de pedido utilizando Mongooose
 */
const pedido = new Pedido({
    nombre: 'Zahir Andrés Rodríguez Mora',
    telefono: '4281061609',
    fecha_solicitud: '07/02/2026',
    fecha_envio: '10/02/2026',
    total: 45.00,
    pagado: ['PAGADO'],
    abono: 45.00,
    comentario: 'Ha sido pagado el pedido',
});

// Guardar el nuevo pedido en la base de datos
await pedido.save()
const createdPedido = await pedido.save()

// Actualizar el nomombre del cliente para el pedido creado
await Pedido.findByIdAndUpdate(createdPedido._id,{
    $set: { nombre: 'Zahir Mora' },
})

// Consultar y mostrar todos los pedidos en la base de datos
const pedidos = await Pedido.find()
// Mostrar los pedidos en la consola
console.log(pedidos)