const {tokenVerifier} = require('../helpers/jwt')

const authentication = (req, res, next) => {
    console.log("Authentication works!")
    const { access_token } = req.headers;
    if(!access_token){
        res.status(404).json({
            msg : "Token not found"
        })
    }else {
        try {
            const decode = tokenVerifier(access_token)
            req.userData = decode
            next();
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
    if (role === 'admin' || role ==='Admin') {
        next()
    } else {
        res.status(403).json({Error : "Access denied!"})
    }
}



module.exports = {
    authentication, isAdmin
}