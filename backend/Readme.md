# Backend de pedidos
## Pruebas con postman

### Obteniendo una lista de pedidos
<img src="pt_get_base.png" alt="Obteniendo una lista de pedidos" width="300" height="300" />

### Obteniendo una lista de pedidos ordenados por updatedAt (ascending)
<img src="pt_get_listaOrdenada.png" alt="Obteniendo una lista de pedidos ordenados por updatedAt (ascending)" width="300" height="300" />

### Obtiene una lista de pedidos por nombre "Zahir Andrés Rodríguez Mora"
<img src="pt_get_nombre.png" alt="Obtiene una lista de pedidos por nombre &quot;Zahir Andrés Rodríguez Mora&quot;" width="300" height="300" />

### Obtiene una lista de pedidos por estato  = PAGADO"
<img src="pt_get_estado.png" alt="Obtiene una lista de pedidos por estato  = PAGADO&quot;" width="300" height="300" />

### Obtiene un pedido por ID"
<img src="pt_get_id.png" alt="Obtiene un pedido por ID&quot;" width="300" height="300" />

### Crea un Pedido"
<img src="pt_post_crear.png" alt="Crea un Pedido" width="300" height="300" />

### Modifica un pedido existente por ID "
<img src="pt_pacth_id.png" alt="Modifica un pedido existente por ID &quot;" width="300" height="300" />

###  Eliminar un pedido por ID"
<img src="pt_delete_id.png" alt=" Eliminar un pedido por ID&quot;" width="300" height="300" />

### Imagen con tamaño personalizado (HTML)
<img src="pt_delete_id.png" alt="Logo" width="300" height="300" />

### Request de usuarios con JWT

### Imagen con tamaño personalizado (HTML)
<img src="pt_sigup.png" alt="Logo" width="300" height="300" />

### Imagen con tamaño personalizado (HTML)
<img src="pt_login.png" alt="Logo" width="300" height="300" />

### Request de comentarios con Rate Limiting y Validación
<img src="pt_comentarios.png" alt="Logo" width="300" height="300" />

## Docker

```bash
docker-compose down
docker-compose up -d --build
```

### Entregable 1
<img src="docker_entregable1.png" alt="Logo" width="300" height="300" />

### Entregable 2
<img src="docker_entregable2.png" alt="Logo" width="300" height="300" />

### Reporte
<img src="docker_reporte.png" alt="Logo" width="300" height="300" />

### Entregable 3
<img src="docker_entregable3.png" alt="Logo" width="300" height="300" />

```bash
docker run --rm -v ${PWD}/nginx-ssl:/export alpine sh -c "apk add --no-cache openssl && openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /export/nginx.key -out /export/nginx.crt -subj '/C=MX/ST=Guanajuato/L=Dolores Hidalgo/O=UTNG/CN=localhost'"
```

### Entregable 4
<img src="docker_entregable4.png" alt="Logo" width="300" height="300" />

### Entregable 5
<img src="docker_entregable5.png" alt="Logo" width="300" height="300" />

### Entregable 6
```bash
for i in {1..15}; do curl -k -i -X POST https://localhost/api/v1/comentarios -H "Content-Type: application/json" -d '{"puntuacion": 5, "texto": "test"}'; echo -e "\n---"; done
```
<img src="docker_entregable6.png" alt="Logo" width="300" height="300" />
by: Zahir Andrés Rodríguez Mora 