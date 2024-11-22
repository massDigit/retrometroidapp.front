# Utilisez une image de base officielle de Node.js 18
FROM node:18-alpine

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le fichier package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste de l'application dans le répertoire de travail
COPY . .

# Construisez l'application Next.js
RUN npm run build

# Exposez le port sur lequel l'application va tourner
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]