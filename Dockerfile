# Use alpine version of Node.js base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the app's source code to the container
COPY . .

# Build the Next.js app
RUN yarn build

# Expose the port used by the Next.js app
EXPOSE 3000

# Specify the command to start the Next.js app
CMD ["yarn", "start"]
