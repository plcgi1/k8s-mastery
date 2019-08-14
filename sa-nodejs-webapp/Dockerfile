FROM node:12
# Environment Variable that defines the endpoint of sentiment-analysis python api.
ENV SA_LOGIC_API_URL http://localhost:5000
ENV PORT 8080
WORKDIR /usr/src/app
EXPOSE 8080

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install -g typescript

COPY src ./src/
COPY tsconfig.json ./
COPY tslint.json ./

RUN ls -la .
RUN ls -la src

RUN npm install
RUN tsc

RUN ls -la .

CMD ["node","."]