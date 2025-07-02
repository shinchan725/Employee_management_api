import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema( {

    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    mobileNo:{
        type:String,
        require:true,
    },
    dob:{
        type:String,
        require:true,
    },
    doj:{
        type:String,
        require:true,
    },
},

    {
        timestamps :true,
    }
);
    

export const employeeModel = mongoose.model('Employee',EmployeeSchema) ;