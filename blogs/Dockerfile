FROM node:14.15-alpine

WORKDIR /srv/app
COPY ./package.json .
RUN npm install

# run command
ENTRYPOINT ["npm", "run", "dev"]
