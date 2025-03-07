FROM node:18-alpine

#Create a app directory
WORKDIR /app

#Install app dependecies
COPY package*.json ./

#Run npm install
RUN npm install

#Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npm" , "start" ]