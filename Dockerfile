# Use uma imagem base do Node.js
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos de dependências para o diretório de trabalho
COPY package.json package-lock.json /app/

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos para o diretório de trabalho
COPY . /app/

# Exponha a porta em que a API estará rodando
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
