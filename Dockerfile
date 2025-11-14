FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY .next/ ./.next/
COPY public/ ./public/

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080

CMD ["npx", "next", "start", "-p", "8080"]
