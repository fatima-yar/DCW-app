# Use Node.js as basic image
FROM node:18

# set work directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install npm
RUN npm install

# copy all files to container
COPY . .

# build Next.js app
RUN npm run build

# execute
CMD ["npm", "run", "start"]
