FROM node:16-alpine
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --prod --frozen-lockfile

COPY . .
CMD "yarn" "start"
