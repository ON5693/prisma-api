FROM node:lts-alpine

RUN apk add --no-cache bash

# RUN npm install -g npm@8.6.0

# RUN npm install -g webpack

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app
