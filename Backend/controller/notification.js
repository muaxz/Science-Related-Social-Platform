const Notificationmodel=require("../models/Notificationmodel");
const {Op} =require("sequelize")

exports.getrows=async(req,res,next)=>{

    const {UserId} =req.params;
    
    try {

       const data = await Notificationmodel.findAll({
                        where:{
                            TakerId:{[Op.substring]:"587"}
                        }
                    })

        return res.json({mydata:data})
        
    } catch (error){
         next();
    }

}