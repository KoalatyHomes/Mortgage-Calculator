FROM node:14.4.0-alpine3.12

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 8080

RUN npm run db:setup

CMD ["npm", "run", "start"]
