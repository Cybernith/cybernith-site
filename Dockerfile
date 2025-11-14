FROM node:20-alpine
WORKDIR /app

# Copy build already created
COPY .next/ ./.next/
COPY public/ ./public/
COPY package.json ./

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

CMD ["npm", "run", "start"]
