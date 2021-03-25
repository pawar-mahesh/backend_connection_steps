// import connection
const connection = require('../utilities/connection')

let user = {}

// login
user.userLogin = async (username, password) => {
    const result = await connection.getCollection()
    const data = await result.find({"username": username})
    if (data.length === 1) {
        if (password == data[0]['password']) {
            return result.updateOne({"username": username},
            // update the last login time of the user
            { $set: { "lastLogin" : new Date().toISOString() } }).then(res => {
                // check for changes done or not. here 'nModified = 1' changes done & 'nModified = 0' no changes
                if (res.nModified === 1) {
                    return data
                }
            })
        } 
        else {
            let err = new Error ("The password is incorrect!!")
            err.status = 401
            throw err
        }
    }
    else {
        let err = new Error ("You are not registerd user! Please register to login")
        err.status = 404
        throw err
    }
}

// signUp
user.signUp = async (userData) => {
    const result = await connection.getCollection()
    const data = await result.find({"username": userData.username})
    if (data.length === 0) {
        // 'create' method to add the user data in database
        let userSignUp = await result.create(userData)
        if (userSignUp) {
            return userData
        }
    }
    else {
        let err = new Error("The username already exist!! Please login")
        err.status = 401
        throw err
    }
}

module.exports = user