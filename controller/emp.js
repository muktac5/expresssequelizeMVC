const employee_data=require("../model/emp");

exports.getallEmp = async(req,res)=>{
    const data=await employee_data.findAll({row:true});
    if(!data){
        res.status(400).json({err:"Data not found"});
    }
    res.status(200).send(data);
};

exports.getempById=async(req,res)=>{
    const data=await employee_data.findByPk(req.params.id,{row:true});
    if(!data){
        res.status(400).json({err:"Data not found"});
    }
    res.status(200).send(data);
};

exports.addEmp = async(req,res)=>{
    let empObj=await employee_data.build({
        id:req.body.id,
        name:req.body.name,
        dept:req.body.dept,
        designation:req.body.designation,
    });
    let emp=await empObj.save();
    if(!emp){
        res.send({err: "Data not inserted"});
    }
    res.send({emp:emp,msg:"Data inserted"});
};

exports.updateEmp= async(req,res)=>{
    var id=req.body.id;
    var name=req.body.name;
    var dept=req.body.dept;
    var designation=req.body.designation;

    employee_data.update(
        {name:name,dept:dept,designation:designation},
        {where:{id:id}}
    ).then(data =>{
        res.send("Data Updated");
    }).catch(err=>{
        res.send({err:"Data not inserted"});
    })
};

exports.deleteEmp=async(req,res)=>{
    var id=req.params.id;
    const data=employee_data.destroy({where:{id:id}});
    if(!data){
        res.json({err:"data not found"});
    }
    res.send("deleted");
};