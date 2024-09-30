# Usa la imagen oficial de Node.js como base
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar el archivo package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install --production

# Copiar el resto del código fuente
COPY . .

# Compilar el proyecto TypeScript a JavaScript
RUN npm run build

# Exponer el puerto en el que la aplicación se ejecutará (definido en tu .env)
EXPOSE 3000

# Comando para iniciar la aplicación en modo producción
CMD ["npm", "run", "start:prod"]
