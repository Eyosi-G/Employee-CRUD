const { EmployeeModel } = require("../models/employee");

module.exports = class EmployeeController {
  static getEmployeesHandler = async (req, res, next) => {
    try {
      const limit = req.query.limit ? Number(req.query.limit) : 15;
      const page = req.query.page ? Number(req.query.page) : 1;

      const start = limit * (page - 1);
      const employees = await EmployeeModel.find().skip(start).limit(limit);
      if (!employees) {
        return res.status(500).json({
          message: "loading employees failed",
        });
      }
      res.json(employees);
    } catch (e) {
      return res.status(500).json({
        message: "loading employees failed",
      });
    }
  };
  static getEmployeeHandler = async (req, res, next) => {
    try {
      const { id } = req.params;
      const employee = await EmployeeModel.findById(id);
      if (!employee) {
        return res.status(500).json({
          message: "can't find employee",
        });
      }
      res.json(employee);
    } catch (e) {
      return res.status(500).json({
        message: "can't find employee",
      });
    }
  };
  static createEmployeeHandler = async (req, res, next) => {
    try {
      const { name, dob, gender, salary } = req.body;
      const dateOfBirth = new Date(dob);
      const employee = await EmployeeModel.create({
        name,
        gender,
        salary,
        dob: dateOfBirth,
      });
      if (!employee) {
        return res.status(500).json({
          message: "employee does't exist",
        });
      }
      res.status(200).json(employee);
    } catch (e) {
      res.status(500).json({
        message: "something went wrong",
      });
    }
  };
  static updateEmployeeHandler = async (req, res, next) => {
    try {
      const { id, name, dob, gender, salary } = req.body;
      const dateOfBirth = new Date(dob);
      await EmployeeModel.findByIdAndUpdate(id, {
        $set: {
          name: name,
          dob: dateOfBirth,
          gender: gender,
          salary: salary,
        },
      });
      res.status(200).end();
    } catch (e) {
      res.status(500).json({
        message: "couldn't update employee",
      });
    }
  };
  static deleteEmployeeHandler = async (req, res, next) => {
    try {
      const { id } = req.params;
      const employee = await EmployeeModel.findByIdAndDelete(id);
      if (!employee) {
        return res.status(401).json({
          message: "deleting employee failed ",
        });
      }
      res.json(employee);
    } catch (e) {
      return res.status(500).json({
        message: "deleting employee failed ",
      });
    }
  };
};
