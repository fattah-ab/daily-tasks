const { users } = require('../models')
const{decryptPwd} = require('../helpers/bcrypt')
const {tokenGenerator} = require('../helpers/jwt')

class userController {
    static async userList (req, res, next) {
        try {
            const user = await users.findAll()
            res.status(200).json(user)
        }
        catch (err) {
            next(err)
        }
    }
    static async getUserById (req, res, next) {
        const id = req.params.id
        try {
            const found = await users.findOne({
                where : {
                    id : id
                }
            })
            if (found) {
                res.status(200).json(
                    {
                        name : found.fullname,
                        email : found.email,
                        image : found.image
                    })
            }else{
            res.status(404).json(
                {
                    msg : "User not Found"
                }
            )            }
        }catch (err) {
            console.log(err);
            next(err)
        }
    }
    static async register (req, res, next) {
        const { email, password, fullname,role } = req.body;
        const image = req.file.path
        try {
            const user = await users.findOne({ 
                where :{
                    email
                }
            })
            if (user) {
                res.status(400).json({
                    msg : "email already registered"
                })
            } else {
                const use = await users.create({
                    email,password,fullname,image,role
                })
                const access_token = tokenGenerator(use)
                res.status(200).json({acces_token : access_token});
            }
        } catch (err) {
            next(err)
        }
    }
    static async login (req, res, next) {
        const { email , password } = req.body
        try {
            const userFound = await users.findOne ({
                where: 
                { 
                    email
                }
            })
            if (userFound) {
                if (decryptPwd(password, userFound.password)) {
                    const access_token = tokenGenerator(userFound)
                    res.status(200).json({access_token : access_token})
                } else {
                    res.status(401).json({
                        msg: "Incorrect Password"
                    })
                }
            } else {

                res.status(401).json({
                    msg: "user not found"
                })
            }
        } catch (err){
            console.log(err)
            next(err)
        }
    }
    static async updateProfile (req, res, next) {
        const id = req.userData.id
        const image = req.file.path
        const { password, fullname, email } = req.body

        try {
            const updateprofile = await users.update({
                image,password,fullname,email},
                { where: 
                    {id: id}
            })
            const newProfile = await users.findOne({
                where: {id : id}
            })
            res.status(200).json({
                Updated : newProfile
            })
        } 
        catch (err) {
            next(err)
        }
    }
}

module.exports = userController