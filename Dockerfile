FROM node:22-alpine

WORKDIR /app
COPY . .

RUN npm install
RUN npm i -g @angular/cli@18.2.12

EXPOSE 4200

CMD ["ng", "serve"]
