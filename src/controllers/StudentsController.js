const StudentsModel=require('../models/StudentsModel')

//CRUD

//C=CREATE
exports.InsertStudent=(req,res)=>{
    let reqBody=req.body;

    StudentsModel.create(reqBody,(error,data)=>{
        if(error){
            res.status(400).json({status:"fail",data:error})
        }
       else{
            res.status(201).json({status:"success",data:data})
           }
    })
}
//R =READ
exports.ReadStudent=(req,res)=>{
    let Query={}
    let Projection="Name Roll Class Remarks"

    StudentsModel.find(Query,Projection,(error,data)=>{
        if(error){
            res.status(400).json({status:"fail",data:error})
        }
       else{
            res.status(201).json({status:"success",data:data})
           }
    })
}

//U = UPDATE
