FROM node:15.5.1-alpine3.12
RUN mkdir /home/app
WORKDIR /home/app
COPY package.json /home/app/package.json
COPY ["nodemon.json", "nodemon-debug.json", "tsconfig.json", "tsconfig.build.json","./"]
RUN npm install
ENV GENERATE_SOURCEMAP=false
CMD npm run start