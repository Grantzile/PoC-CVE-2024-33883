FROM node
RUN mkdir -p /poc
WORKDIR /poc
COPY ./ /poc
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
