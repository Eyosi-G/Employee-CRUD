const mongoose = require('mongoose');
const EmployeeSchema = new mongoose.Schema({
    name:String,
    dob:Date,
    gender:String,
    salary:Number
});
const EmployeeModel  = mongoose.model("employee",EmployeeSchema);

module.exports.EmployeeModel = EmployeeModel;
module.exports.EmployeeSchema = EmployeeSchema;

