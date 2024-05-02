FROM node:16-alpine
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build-dev
EXPOSE 5014
CMD  ["npm", "start"]
