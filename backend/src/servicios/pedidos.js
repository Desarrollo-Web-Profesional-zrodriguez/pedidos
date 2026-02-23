import { Pedido } from "../bd/modelos/pedido";

/**
 * Función para crear un nuevo pedido en la base de datos.
 * @param {*} pedido - Objeto que contiene los detalles del pedido
 * a crear, incluyendo:
 * - nombre: Nombre del cliente
 * - telefono: Teléfono del cliente (10 dígitos)
 * - fecha_solicitud: Fehca de solicitud del pedido
 * - fecha_envio: Fecha de envio del pedido
 * - total: Total del pedido (opcional, por defecto 0.0)
 * - pagado: Monto abonado al pedido (opcional)
 * - comentario: comentarios adicionales sobre el pedido (opcional)
 * @returns {Promise<Pedido>} - el pedido creado en la base de datos
*/

export async function creaPedido({
    nombre,
    telefono,
    fecha_solicitud,
    fecha_envio, 
    total,
    pagado,
    abono,
    comentario
}) {
    const pedido = new Pedido({
        nombre,
        telefono,
        fecha_solicitud,
        fecha_envio,
        total,
        pagado,
        abono,
        comentario,
    });
    return await pedido.save();
}

/**
 * Función para obtener una lista de pedidos de la base de datos.
 * @param {*} query Tipo de consulta
 * @param {*} param1 Ordenamiento de la consulta 
 * @returns {Promise<Array>} - Una promesa que resuelve en un arreglo de pedidos.
 */

