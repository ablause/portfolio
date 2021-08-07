ARG NODE_VERSION=slim

FROM node:${NODE_VERSION} as build

WORKDIR /app

COPY . .

RUN yarn install --production=false

RUN yarn build --mode production


FROM node:${NODE_VERSION}

ENV NODE_ENV=production

WORKDIR /app

COPY --chown=node:node ["package.json", "yarn.lock", "server.mjs",  "./"]

COPY --chown=node:node --from=build app/dist ./dist

RUN yarn install --production

USER node

CMD [ "node", "server.mjs" ]