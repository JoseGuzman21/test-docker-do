FROM node:12-alpine
# RUN apk add --no-cache python g++ make
WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 8080

CMD ["node", "src/index.js"]