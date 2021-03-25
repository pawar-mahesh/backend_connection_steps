const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const errorLogger 
// const requestLogger

const route = require('./routes/route')
const create = require('./model/dbSetup')
const cors = require('cors')
const { response } = require('express')

let port = 3000

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(requestLogger);
app.use('/user', route);
// app.use(errorLogger);

app.get('/user/setupDB', (req, res, next) => {
    create.setupDB().then(response => {
        if (response) {
            res.json({ message: "Successfully inserted " + response + " documents into database" })
        }
    }).catch(err => {
        next(err)
    })
})

app.listen(port)
console.log(`Server stared at http://localhost/${port}`)