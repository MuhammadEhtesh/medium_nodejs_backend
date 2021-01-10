FROM node:12
WORKDIR /Users/Shani/Desktop/tutorial
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]