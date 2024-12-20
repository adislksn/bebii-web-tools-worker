## Build command: docker build -t tools-api .

# Stage 1: Build the application.
# FROM node:lts-alpine3.19 as builder # This is the original minimal node 22, but for punycode need version <21.0.0
FROM node:20-alpine3.19 as builder
WORKDIR /app
COPY . .
RUN npm i
RUN npm i -g typescript
RUN npm run build
RUN rm -r node_modules
RUN npm ci --omit=dev

# Stage 2: Run the application
FROM node:20-alpine3.19
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
RUN mkdir public

# Run command on container starting.
CMD ["npm", "run", "start:prod"]