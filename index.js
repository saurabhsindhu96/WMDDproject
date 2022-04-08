const express = require('express')
const app = express();
const PORT=2022
const http = require('http');




const router1 = express.Router()
// (bodyParser = require("body-parser"));
var cors = require('cors');

require('dotenv').config()
const bodyParser = require("body-parser")

 const mongoose = require("mongoose");
  // Connecting to the Database
mongoose.connect(
  process.env.DBCONN, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //auth: config.config()['auth'],
  connectTimeoutMS: 50000
}
)
  .catch(err => {
    console.log(err);
    console.log("Could not connect to Database");
  });




app.use(cors());
app.use(cors({
  origin: '*',
  exposedHeaders: ['Accept', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Headers', 'api_key', 'Content-Type', 'If-None-Match', 'access_token', 'platform'],
}));
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
//setting modules as globally
global.model = require("./model/model");
app.use(bodyParser.json({ limit: '100mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.listen(PORT, () => {
    console.log(`listing to port ${PORT}`)
  })
  console.log('running api')
  app.use((req, res, next) => {
    console.log('--------------------------------request Details----------------------------------------', req.method, req.originalUrl);

  
    Object.keys(req.query).length ? console.log('QUERY : ', req.query) : '';
    Object.keys(req.body).length ? console.log('BODY : ', req.body) : '';
    console.log('-----------------------------------------ENDS------------------------------------------');
    next();
  });

const hotelRoutes = require("./apiroutes/hotel/api-routes")(router1);
app.use("", hotelRoutes);