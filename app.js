// const express=require('express')
// const app=express();
// const PORT=2022
// const webSocketsServerPort = 8000;
// const webSocketServer = require('websocket').server;
// const http = require('http');
// // const {graphqlHTTP}=require('express-graphql')
// const cron = require('node-cron');
// // const schema = require('./controllers/graphqlSchema/schema')
// require('dotenv').config()
// const weatherJob=require('./controllers/cron/cron')

//  const mongoose = require("mongoose");
//   // Connecting to the Database
// mongoose.connect(
//   process.env.DBCONN, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   //auth: config.config()['auth'],
//   connectTimeoutMS: 50000
// }
// )
//   .catch(err => {
//     console.log(err);
//     console.log("Could not connect to Database");
//   });

//   var cors = require('cors');
//   app.use(cors());
// app.use(cors({
//   origin: '*',
//   exposedHeaders: ['Accept', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Headers', 'api_key', 'Authorization', 'Content-Type', 'If-None-Match', 'access_token', 'platform'],
// }));
// mongoose.set('debug', true);
// mongoose.Promise = global.Promise;
// global.model = require("./models/model");
// ///Graphql api
// // app.use('/graphql',graphqlHTTP({
// //   schema,
// //     graphiql:true
// // }))
// const router1 = express.Router()
// app.listen(PORT, () => {
//   console.log(`listing to port ${PORT}`)
// })
// console.log('running api')
// app.use((req, res, next) => {
//   console.log('--------------------------------request Details----------------------------------------', req.method, req.originalUrl);
//   console.log('authorization', req.headers['authtoken']);
//   console.log('offset', req.headers['offset']);
//   console.log('Headers', req.headers['lng']);

//   Object.keys(req.query).length ? console.log('QUERY : ', req.query) : '';
//   console.log('-----------------------------------------ENDS------------------------------------------');
//   next();
// });
// const weatherRoutes = require("./apiroutes/weather/api-routes")(router1);
// app.use("", weatherRoutes);
// //Cron job


// // Creating the server for websockets
// const server = http.createServer();
// server.listen(webSocketsServerPort);
// const wsServer = new webSocketServer({
//   httpServer: server
// });
// wsServer.on('request', function(request) {
//   // var userID = getUniqueID();
//   console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');
//   // You can rewrite this part of the code to accept only the requests from allowed origin
//   const connection = request.accept(null, request.origin);
//   console.log('connected:  in '+connection)

// });
// global.wsServer=wsServer;
// cron.schedule('*/50     *', function () {
//   console.log('running on every minute');
//   weatherJob.GetWeatherFromApi(wsServer);
// });