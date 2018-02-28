FROM mhart/alpine-node:8
WORKDIR /src
COPY backend .
RUN npm install
EXPOSE  8080
CMD ["npm", "start"]