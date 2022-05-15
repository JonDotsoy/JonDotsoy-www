FROM node:18.1.0-alpine AS builder

WORKDIR /app
COPY . .

RUN npm install && \
    npm run build

FROM node:18.1.0-alpine

WORKDIR /app
COPY package-lock.json package-lock.json
COPY package.json package.json
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
RUN npm install --production

EXPOSE 3000

CMD npm run start
