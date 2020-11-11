const { static } = require('express');
const {tokenVerifier} = require('../helpers/jwt')
const {users} = require('../models')


const authentication = (req, res, next) => {
    const { access_token } = req.headers;
    const decode = tokenVerifier(access_token)

    console.log("Authentication works!")
    if(!access_token){
        res.status(404).json({
            msg : "Token not found"
        })
    }else {
        try {
            req.userData = decode
                next()
        }catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    }
}

const isAdmin = (req, res, next) => {
    const { access_token } = req.headers;
    const decode = tokenVerifier(access_token)
    req.userData = decode

    const role = req.userData.role;
    if (role === 'Admin' || role === 'admin') {
        next()
    } else {
        res.status(403).json({Error : "Access denied!"})
    }
}
const validated = async (req, res, next) => {
    const { access_token } = req.headers;
    const decode = tokenVerifier(access_token);
    req.userData = decode;

    const userEmail = decode.email;
    const validUser = await users.findOne(  {
    where: {
        email: userEmail
        }
    })

    if (!validUser) {
        res.status(403).json({
            message: "forbidden operation, you need to register"
        })
    } else {
        next()
    }    
}

module.exports = {
    authentication, isAdmin, validated
}