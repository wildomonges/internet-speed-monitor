FROM node:12
RUN mkdir -p /app/src/express-app
WORKDIR /app/src/express-app
COPY package.json /app/src/express-app/
COPY yarn.lock /app/src/express-app/
RUN yarn
COPY . /app/src/express-app/
EXPOSE 3000
