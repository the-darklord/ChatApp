FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV VITE_PORT=$VITE_PORT
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host"]
