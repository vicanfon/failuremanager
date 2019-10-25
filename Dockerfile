FROM node:alpine
ENV ASSET_NAME="failuremanager"
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN apk add --no-cache bash
RUN npm run boot
EXPOSE 4201
LABEL vf-OS=true
LABEL vf-OS.icon=img/2.png
LABEL vf-OS.urlprefixReplace=true
LABEL vf-OS.frontendUri="/failuremanager/"
LABEL vf-OS.name=failuremanager
LABEL vf-OS.market.product=8
LABEL vf-OS.version.major=1
LABEL vf-OS.market.price=1
LABEL vf-OS.version.version=7.1
CMD ["npm", "start"]
