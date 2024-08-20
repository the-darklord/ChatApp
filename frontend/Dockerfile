FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host"]
