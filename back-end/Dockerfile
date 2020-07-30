FROM node:alpine

ENV WAIT_VERSION 2.7.2

ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app

RUN apk add --no-cache openssl wget

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --silent

COPY . ./

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

EXPOSE 3333

CMD ["npm","run","dev"]




