# syntax=docker/dockerfile:1

ARG NODE_IMAGE=node:20-alpine
ARG NGINX_IMAGE=nginx:1.27-alpine

FROM ${NODE_IMAGE} AS build
WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json package-lock.json ./
# package-lock.json in this repo may not always be compatible with `npm ci`.
# Use `npm install` to resolve and install dependencies during image build.
RUN npm install --no-audit --no-fund

# Copy sources and build
COPY . .
RUN npm run build

FROM ${NGINX_IMAGE} AS runtime

# Nginx SPA config
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Static assets
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Simple healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1
