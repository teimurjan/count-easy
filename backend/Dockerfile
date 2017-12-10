FROM node:carbon-stretch

WORKDIR /home/app

COPY . .
RUN npm install

EXPOSE 80 5000
CMD [ "npm", "start" ]