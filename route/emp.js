const express=require("express");

const{
    getallEmp,
    getempById,
    addEmp,
    updateEmp,
    deleteEmp
}=require("../controller/emp");

const router=express.Router();

router.get("/getAllEmployees",getallEmp);
router.get("/getEmployeeById/:id",getempById);
router.post("/insertEmployee",addEmp);
router.put("/updateEmployee",updateEmp);
router.delete("/deleteEmployeeById/:id",deleteEmp);

module.exports=router;