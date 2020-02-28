FROM node:@latest

WORKDIR ./functions

RUN npm install node index.js

COPY package*.json ./functions

COPY . 

EXPOSE 4200
# DOCKER CONTAINER PORT

CMD ["node","functions/index.js"]