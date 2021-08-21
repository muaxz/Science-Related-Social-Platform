const Notificationmodel=require("../models/Notificationmodel");
const Usermodel=require("../models/Usermodel");
const Contentmodel=require("../models/Contentmodel");
const Commentmodel=require("../models/Commentmodel");
const {Op} =require("sequelize")

exports.getrows=async(req,res,next)=>{

    const {UserId,Order,last} =req.params;

    console.log("countt "+typeof(last));
    
    try {

                const data = await Notificationmodel.findAll({
                    where:{
                        TakerId:{[Op.substring]:`${UserId}`}
                    },
                    limit:last == "false" ? parseInt(Order) : 1,
                    offset:last == "false" ? parseInt(Order)-10 : 0,
                    order:[["createdAt","DESC"]],
                    include:[{
                        model:Usermodel,
                        attributes:["id","firstname","lastname","imageurl"]
                    },
                    {
                        model:Contentmodel,
                        attributes:["id"]

                    },
                    {
                        model:Commentmodel,
                        attributes:["id"]
                    }
                ]
                })

                return res.json({mydata:data})
       
      
        
    } catch (error){
         next();
         return;
    }    
}

exports.getcount = async(req,res,next)=>{

   const {UserId} =req.params;

   try {
         
    const count = await Notificationmodel.count({
        where:{
            Facecheck:false,
            TakerId:{[Op.substring]:`${UserId}`}
        }
    });

    return res.json({data:count})

   } catch (error){
        next();
        return;
   }

}

exports.Updatecount = async(req,res,next)=>{
    
    const {UserId} = req.params;
    try {
    
        const record = await Notificationmodel.findAll({where:{
                Facecheck:false,
                TakerId:{[Op.substring]:`${UserId}`}
            }
        })

        for (let i = 0; i < record.length; i++) {
            //çözüm bulunacak
            await record[i].update({Facecheck:true})

        }
        

        return;

    } catch (error) {
         next();
         console.log(error)
    }
}