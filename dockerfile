FROM node:16-alpine
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build-dev
EXPOSE 5011
CMD  ["npm", "start"]
