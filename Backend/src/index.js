const http=require('http');
const app=require('./app');
const connectDb=require('./connector');
 connectDb();

const port=9999;
const server=http.createServer(app);

server.listen(port);
