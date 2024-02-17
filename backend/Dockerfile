FROM node:21.5.0-alpine3.18

WORKDIR /app
# create a directory inside the container'
COPY package.json .
COPY yarn.lock .

## Set the working directory to /app

RUN yarn
COPY . .

# Expose the listening port of your app
EXPOSE 3003

