// import user model
const userModel = require('../model/user')

let user = {}

// user login service
user.userLogin = (username, password) => {
    return userModel.userLogin(username, password).then(res => {
        return res
    })
}

// user signup service
user.signUp = (userData) => {
    return userModel.signUp(userData).then(res => {
        return res
    })
}

module.exports = user