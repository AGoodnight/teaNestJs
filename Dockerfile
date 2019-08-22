FROM node:10
MAINTAINER RightBrain Networks "adam.goodnight@rightbrainnetworks.com"

# Set working directory
WORKDIR .

# Set up node packages
COPY package*.json ./
RUN npm install

COPY tsconfig*.json ./
COPY ormconfig.json ./

COPY src .

EXPOSE 8080
RUN npm run-script build
CMD ["node","dist/main.js"]
