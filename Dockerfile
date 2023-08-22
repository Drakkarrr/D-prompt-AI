FROM node:alpine
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn install

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build
EXPOSE 3000
ENV PORT 3000

CMD ["yarn", "start"]
