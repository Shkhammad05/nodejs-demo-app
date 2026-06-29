# Step 1: Base image with specific LTS Node version on lightweight Linux
FROM node:20-alpine

# Step 2: Set secure isolated workspace directory inside container
WORKDIR /usr/src/app

# Step 3: Copy only dependency manifests first to leverage layer caching
COPY package*.json ./

# Step 4: Run clean production-only installation
RUN npm ci --only=production

# Step 5: Copy the remaining source code files
COPY . .

# Step 6: Inform runtime engine of intended port exposure
EXPOSE 3000

# Step 7: Define execution command for startup
CMD [ "npm", "start" ]