const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express()

const address = require('./routes/api/address')

app.use(cors())
//Bodyparser middleware
app.use(bodyParser.urlencoded({
  extended: true
}));

// DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  // .connect("mongodb://Tucker:Tucker@cluster0-shard-00-00-tihhu.mongodb.net:27017,cluster0-shard-00-01-tihhu.mongodb.net:27017,cluster0-shard-00-02-tihhu.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true", { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected ... '))
  .catch(err => console.log(err));

app.use('/', address)
  .listen(process.env.PORT || 5000, () => console.log("It's clobberin' time!"))