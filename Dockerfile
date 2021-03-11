FROM node:15.5.1-alpine3.12
RUN mkdir /home/app
WORKDIR /home/app
COPY package.json /home/app/package.json
COPY files /home/app/files
COPY ["tsconfig.json", "tsconfig.build.json","./"]
RUN npm install
ENV GENERATE_SOURCEMAP=false
CMD npm run start