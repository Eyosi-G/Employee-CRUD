import { 
    IEmployee, 
    IEmployeeAction, 
    EmployeeActionTypes
    
} from './employee.types';
export const createEmployee = ({dob,gender,name,salary}:IEmployee):IEmployeeAction=>({
    type:EmployeeActionTypes.CREATE_EMPLOYEE,
    payload:{
        dob,gender,name,salary
    }
});
export const deleteEmployee = (id:string):IEmployeeAction => ({
    type:EmployeeActionTypes.DELETE_EMPLOYEE,
    payload:id
});
export const updateEmployee = (employee:IEmployee):IEmployeeAction=>({
    type:EmployeeActionTypes.UPDATE_EMPLOYEE,
    payload:employee
});
export const getEmployees = ():IEmployeeAction=>({
    type:EmployeeActionTypes.GET_EMPLOYEES,
});
export const getEmployee = (id:string):IEmployeeAction=>({
    type:EmployeeActionTypes.GET_EMPLOYEE,
    payload:id
})




