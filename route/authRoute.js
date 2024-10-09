const { registerUser, loginUser,logoutUser } = require('../controller/authController');

const authRoute = require(`express`).Router()

// register route
authRoute.post(`./register`, registerUser)

// login route
authRoute.post('/login', loginUser)

// logout route
authRoute.get('/logout', logoutUser)

module.exports = authRoute;