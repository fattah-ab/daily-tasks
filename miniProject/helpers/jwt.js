const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY


const tokenGenerator = (user) => {
    const { id,email,role,fullname } = user
    return jwt.sign({
        id,
        fullname,
        email,
        role,
    }, secretKey)
}

const tokenVerifier = (access_token) => {
    return jwt.verify(access_token,secretKey)
}

module.exports = {
    tokenGenerator, tokenVerifier
}