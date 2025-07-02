import express from "express"
import { employeeModel } from "../db/employeeModel"

class employeeController{

    getAllEmployee = async(req :express.Request,res:express.Response) => {
        try{
            const employees = await employeeModel.find();
            return res.status(200).json({data:employees})
        }
        catch(error){
            return res.sendStatus(400);
        }
    }

    getEmployee = async(req :express.Request,res:express.Response) => {
        try{
            const {id} = req.params;
            const employee = await employeeModel.findById(id);
            return res.status(200).json({data:employee})
        }
        catch(error){
            return res.sendStatus(400);
        }
    }

    createEmployee = async(req :express.Request,res:express.Response) => {
        try{
            const {name,email,mobileNo,dob,doj} = req.body;
            const employee = new employeeModel({
                name,
                email,
                mobileNo,
                dob,
                doj
            });
            await employee.save();
            return res.status(201).json({message:'employee created',data:employee})
        }
        catch(error)
        {
            return res.sendStatus(400);
        }
    }

    updateEmployee = async(req :express.Request,res:express.Response) => {
        try{
            const {name,email,mobileNo,dob,doj} = req.body;
            const {id} = req.params;

            const employee = await employeeModel.findById(id);
            if(employee){
                employee.name = name;
                employee.email = email;
                employee.mobileNo = mobileNo;
                employee.dob = dob;
                employee.doj = doj;
                await employee.save();
                return res.status(200).json({message:'employee created',data:employee})

            }
            return res.sendStatus(400);

        }
        catch(error)
        {
            return res.sendStatus(400);
        }
    }

    deleteEmployee = async(req :express.Request,res:express.Response) => {
        try{
            const {id} = req.params;
            await employeeModel.findByIdAndDelete({_id: id});
            return res.status(200).json({message: " employee data deleted"})
        }
        catch(error){
            return res.sendStatus(400);
        }
    }
}

export default new employeeController;