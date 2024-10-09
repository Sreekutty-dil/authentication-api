const  { StatusCodes } = require('http-status-codes');

// register
const registerUser = async (req,res) => {
    try {
        res.json({ msg: "register"} )
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({status: false, msg: err.message });
    }
}

// login
const loginUser = async (req,res) => {
    try {
        res.json({ msg: "login"} )
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({status: false, msg: err.message });
    }
}
// logout
const logoutUser = async (req,res) => {
    try {
        res.json({ msg: "logout"} )
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({status: false, msg: err.message });
    }
}
module.exports = {registerUser, loginUser, logoutUser };