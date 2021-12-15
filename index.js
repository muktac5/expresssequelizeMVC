const express=require("express");
const sequelize=require("./connection");
var cors=require("cors");

const empRoute=require("./route/emp");
const app=express();

app.use(express.json());
app.use(cors());

const port=8000;

sequelize.authenticate().then(()=>{
    console.log("connected1");
}).catch((err)=>{
    console.log(err);
})

app.use("/emp/",empRoute);

app.listen(port,()=>{
    console.log("listening at port 8000");
})
