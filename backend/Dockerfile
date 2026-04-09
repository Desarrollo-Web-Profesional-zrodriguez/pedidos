# --- ETAPA 1: Dependencias (Builder) ---
FROM node:20-alpine AS deps
WORKDIR /app
# Copiamos solo los archivos de dependencias primero para aprovechar el caché de Docker
COPY package*.json ./
# Instalamos solo las dependencias de producción (omite dependencias de desarrollo como nodemon o eslint)
RUN npm install --omit=dev --ignore-scripts

# --- ETAPA 2: Imagen Final (Runner) ---
FROM node:20-alpine AS runner
WORKDIR /app

# Copiamos los módulos de node ya instalados desde la Etapa 1
COPY --from=deps /app/node_modules ./node_modules

# Copiamos el resto del código de tu backend (carpetas src, archivos, etc.)
COPY . .

# Exponemos el puerto de forma interna en el contenedor
EXPOSE 3001

# Comando para iniciar tu aplicación (Asegúrate de que este sea el comando correcto. 
# Si tu app arranca con 'node src/test/index.js' o 'node app.js', ajústalo aquí)
CMD ["npm", "start"]