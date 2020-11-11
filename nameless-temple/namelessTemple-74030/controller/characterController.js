const { characters } = require('../models')

class CharacterController {
    static async getChar (req, res, next) {
        try {
            const result = await characters.findAll({
                order : [
                    ['id', 'ASC']
                ]
            })
            res.status(200).json(result)
        } catch (err) {
            // res.status(500).json(err)
            next(err)
        }
    }
    static async addChar (req, res, next) {
        const { name, image }= req.body;
        // const image = req.file.path

        try {
            const found = await characters.findOne({
                where: {
                    name
                }
            })
            if (found) {
                res.status(409).json({
                    msg : "Name already exist, try another name."
                })
            } else {
                const char = await characters.create({
                    name, image
                })
                res.status(201).json(char)
            }
        } catch (err) {
            // res.status(500).json(err)
            next(err)
        }
    }
    static async findById (req, res, next) {
        const id = req.params.id;

        try {
            const result = await characters.findOne({
                where : { id }
            })
            res.status(200).json(result)
        } catch (err) {
            // res.status(500).json(err)
            next(err)
        }
    }
    static async updateChar(req,res, next) {
        const { name, image } = req.body;
        const id = req.params.id
        try {
            const found = await characters.findOne({
                where: { name }
            });
            if (found) {
                res.status(409).json("Name already used!, try another Name");
            } else {
                const result = await characters.update({
                    name,
                    image
                }, {
                    where: { id }
                });
                res.status(200).json(result);
            }
        } catch (err) {
            // res.status(500).json(err)
            next(err)
        }
    }
    static async deleteChar(req, res, next) {
        const id = req.params.id

        try {
            const result = characters.destroy({
                where :{ id }
            })
            res.status(200).json({
                result,
                msg: "Character deleted"
            })
        }catch (err) {
            // res.status(500).json(err)
            next(err)
        }
    }   
}
module.exports = CharacterController