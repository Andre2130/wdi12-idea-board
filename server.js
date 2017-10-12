require('dotenv').config()
const express = require('express') 
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const UsersController = require('./routes/UserController')
mongoose.Promise = global.Promise

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
app.use('/api/users', UsersController)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('App listening on port: ', PORT)
})