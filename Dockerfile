# Étape 1 : Construire l'application
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Exécuter l'application
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3005
CMD ["npm", "start"]