const express = require('express');
const EmployeeController = require('../controllers/employee_controller');
const router = express();
router.route('/employees')
.post(EmployeeController.createEmployeeHandler)
.get(EmployeeController.getEmployeesHandler)
.put(EmployeeController.updateEmployeeHandler);

router.route('/employees/:id')
.get(EmployeeController.getEmployeeHandler)
.delete(EmployeeController.deleteEmployeeHandler);


module.exports = router;