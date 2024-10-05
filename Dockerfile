FROM node:21.7.3-alpine as build

WORKDIR /usr/src/app
COPY . .

RUN npm ci --omit=dev


FROM nginx:stable-alpine

COPY --from=build /usr/src/app/ /usr/share/nginx/html