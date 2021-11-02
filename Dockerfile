FROM node:12-alpine
# RUN apk add --no-cache python g++ make
WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

CMD ["node", "src/index.js"]