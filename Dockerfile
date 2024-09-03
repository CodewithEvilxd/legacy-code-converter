FROM node:20-alpine

WORKDIR /nextapp

COPY package* .

RUN pnpm install
COPY . .
 
EXPOSE 3000

CMD ["pnpm", "run", "dev"]