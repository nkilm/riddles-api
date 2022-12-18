FROM node:14

WORKDIR /app

# copy package.json and lock file first
COPY package*.json .

RUN npm install

# copy remaining files
COPY . .

CMD ["npm","start"]
