FROM node:alpine

ENV ASSET_NAME="failuremanager"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .
RUN apk add --no-cache bash
RUN npm boot

EXPOSE 4201

LABEL vf-OS=true
LABEL vf-OS.icon=img/2.png
LABEL vf-OS.urlprefixReplace=true

CMD ["npm", "start"]
