FROM node:18.1.0-alpine AS builder-pack

WORKDIR /app
COPY . .

RUN npm install && \
    cp $(npm pack) /app.tgz

FROM node:18.1.0-alpine AS builder

WORKDIR /app
COPY --from=builder-pack /app.tgz /app.tgz
RUN npm i /app.tgz --omit dev --omit optional --omit peer

FROM node:18.1.0-alpine

WORKDIR /app
COPY --from=builder /app /app

EXPOSE 3000
ENV NODE_ENV production
ENV BASE_URL http://localhost:3000

CMD npx next start node_modules/jondotsoy-www/
