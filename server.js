require('dotenv').config()
const express = require('express') 
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
mongoose.promise = global.promise

//created a new app usingh express
const app = express()

mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('Successfuly connected to MongoDB')
})

connection.on('error', (err) => {
    console.log('MongoDB Error: ', err)
})

app.use(express.static(`${__dirname}/client/build`))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('App listening on port: ', PORT)
})