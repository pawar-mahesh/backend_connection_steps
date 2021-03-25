const express = require('express')
// create a express route
const route = express.Router()

// import user service
const userService = require('../services/user.service')


// login route
route.post('/login', (req, res, next) => {
    let username = req.body.username
    let password = req.body.password

    return userService.userLogin(username, password).then(data => {
        res.json({data: data})
    }).catch(err => {
        next(err)
    })
})

// signup route
route.post('/signup', (req, res, next) => {
    let userData = req.body
    userData.lastLogin = new Date().toISOString()
    return userService.signUp(userData).then(data => {
        res.json({data: data})
    }).catch(err => {
        next(err)
    })
})

module.exports = route