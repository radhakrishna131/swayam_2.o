FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json turbo.json ./
COPY apps/api/package.json apps/api/package.json
COPY packages/config/tsconfig.base.json packages/config/tsconfig.base.json
RUN npm install
COPY . .
RUN npm run build --workspace=@swayam2/api
CMD ["npm","run","dev","--workspace=@swayam2/api"]
