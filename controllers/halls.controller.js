const Hall = require("../models/Hall.model")

module.exports.hallController = {
    postHall: async (req,res)=>{
        const {hallNumber,status} = req.body
        try{
            const hall = await Hall.create({hallNumber,status})
            res.json(hall)
        }
        catch(err){
            res.json(err.toString())
        }
    },
    getHalls: async (req,res)=>{
        try{
            const hall = await Hall.find()
            res.json(hall)
        }
        catch(err){
            res.json(err.toString())
        }
    },
    getHallById: async (req,res)=>{
        try{
            const hall = await Hall.findById(req.params.id)
            res.json(hall)
        }
        catch(err){
            res.json(err.toString())
        }
    }
} 