#!/bin/sh

npm install
npm install prisma --save-dev
npm run build
npm run start:dev
