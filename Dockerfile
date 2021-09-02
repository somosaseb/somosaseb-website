FROM node:16 as frontend-deps

WORKDIR /app

COPY package*.json /app

RUN set -eux && \
    cd /app && \
    npm set --global audit false &&  \
    npm set --global fund false && \
    npm install --package-lock && \
    npm install -g netlify-cli

FROM frontend-deps

COPY . /app

RUN set -eux && \
    npm run build