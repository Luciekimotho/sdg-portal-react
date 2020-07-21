# Production Build

# Stage 1: Build react client
FROM node:10.16-alpine as client

# Working directory be app
WORKDIR /usr/app/client/

COPY client/package*.json ./

# Install dependencies

RUN npm config set '@bit:registry' https://node.bit.dev
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

# copy local files to app folder
COPY client/ ./
RUN ls

RUN npm build

# Stage 2 : Build Server

FROM node:10.16-alpine

WORKDIR /usr/src/app/
COPY --from=client /usr/app/client/build/ ./client/build/
RUN ls

WORKDIR /usr/src/app/server/
COPY server/package*.json ./
RUN npm install -qy
COPY server/ ./

ENV PORT 8080

EXPOSE 8080

CMD ["npm", "start"]