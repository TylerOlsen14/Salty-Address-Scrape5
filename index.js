const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const fs = require('fs');
const port = process.env.PORT || 5000
// const port = 5000
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Tucker:Tucker@cluster0-tihhu.mongodb.net/test?retryWrites=true', {useNewUrlParser: true})
// var readMe = fs.readFileSync('../address.json', 'utf8');
// var address = JSON.parse(readMe)

// app.use(express.static('../address.json'))

// Middleware
app.use(bodyParser.json())
app.use(cors())


app.listen(port, () => console.log(`Server started on port ${port}`))

app.get('/', function(req, res) {
  res.send(address)
})

app.get('/dev', function(req, res) {
  res.send('<h1>Route dev!!!</h1>')
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))