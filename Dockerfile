FROM node:lts

WORKDIR /usr/src/app 

VOLUME ["/usr/src/app"]

RUN npm install -g nodemon

EXPOSE 3002

ENV NODE_ENV=development
ENV DATABASE=mongodb://mongodb:/27017/tasks
ENV PORT=3002

ENTRYPOINT [ "tail", "-f", "/dev/null" ]