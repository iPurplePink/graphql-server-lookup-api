FROM node:latest
ENV PORT 4030
EXPOSE 4030

WORKDIR /usr/src/app
COPY . .

RUN npm install
RUN npm run build

CMD [ "node", "build/index.js" ]
