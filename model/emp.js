const Sequelize = require("sequelize");
const sequelize=require("../connection");

let employee_data=sequelize.define("employeesequelize1",{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    name:Sequelize.STRING,
    dept:Sequelize.STRING,
    designation:Sequelize.STRING
},{
    timestamps:false,
    freezeTableName:true
});
/*
employee_data.sync().then((data)=>{
    console.log("Table created");
}).catch((err)=>{
    console.log(err);
});
*/
module.exports=employee_data;