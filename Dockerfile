FROM node:16 as frontend-deps

WORKDIR /app

COPY package*.json /app

RUN set -eux && \
    npm ci

FROM frontend-deps

COPY . /app

RUN set -eux && \
    npm build