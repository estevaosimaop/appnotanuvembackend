# Utilizando a imagem oficial do Node.js v22
FROM node:22-slim

# Diretório de trabalho
WORKDIR /app

# Copia arquivos de definição de pacotes
COPY package*.json ./

# Instalação de dependências
RUN npm install --only=production

# Copia o código fonte
COPY . .

# Expõe a porta de tráfego
EXPOSE 8080

# Inicialização
CMD ["node", "server.js"]