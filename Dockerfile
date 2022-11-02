FROM node:alpine

WORKDIR /FILEAPP
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm","start"]