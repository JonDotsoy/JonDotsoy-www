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
RUN npm install --omit=dev

EXPOSE 3000
ENV NODE_ENV production
ENV BASE_URL http://localhost:3000

CMD npm run start
