const { Schema } = require('mongoose')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

// to make Mongoose's default index build to avoid deprecation warnings
mongoose.set('useCreateIndex', true) 

// url for the database connection, here 'mongodb://localhost:27017/{DataBaseName}'
const url = "mongodb://localhost:27017/UserDB"

// create a schema of the collection
const userSchema = Schema({
    username: { type: String, required: [true, 'Username is required'] },
    password: { type: String, required: [true, 'Password is required'] },
    email: { type: String, required: [true, 'Email is required'] },
    mobileNo: { type: Number, required: [true, 'Mobile number is required'] },
    lastLogin: { type: Date, required: [true] }
}, {collection: "Users", timestamps: true})

let connection = {}

// returns model object of "Users" collection
connection.getCollection = () => {
    // Establish connection and return model as promise
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}).then(database => {
        return database.model('Users', userSchema)
    }).catch(error => {
        let err = new Error("Could not connect to the database")
        err.status = 500
        throw err
    })
}

module.exports = connection