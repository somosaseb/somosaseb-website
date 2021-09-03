FROM node:16 as frontend-deps

WORKDIR /app

COPY package*.json /app

RUN set -eux && \
    cd /app && \
    npm set --global audit false &&  \
    npm set --global fund false && \
    npm install --package-lock && \
    npm install -g netlify-cli

RUN set -eux && \
    apt update && \
    apt install jq --yes

FROM frontend-deps

COPY . /app

RUN set -eux && \
    npm run build