import { EmployeeApi } from './employee.api';
import {all,call, put, takeLatest,delay} from 'redux-saga/effects'
import {EmployeeActionTypes,EmployeeActionTypesReducer, IEmployee,IEmployeeAction} from './employee.types'

function *fetchEmployeesAsync(data:IEmployeeAction):Generator<any,any,any>{
     const employees = yield call(EmployeeApi.fetchEmployees);
     yield put({
         type:EmployeeActionTypesReducer.GET_EMPLOYEES,
         payload:employees
     })
}
function *createEmployeeAsync(data:IEmployeeAction):Generator<any,any,any>{
    const employee = (data.payload as IEmployee)
    yield call(()=>EmployeeApi.createEmployee(employee));
    const employees = yield call(EmployeeApi.fetchEmployees);
    yield put({
         type:EmployeeActionTypesReducer.GET_EMPLOYEES,
         payload:employees
    })

    //todo: create and fetch employees
}
function *editEmployeeAsync(data:IEmployeeAction):Generator<any,any,any>{
    const employee = (data.payload as IEmployee)
    yield call(()=>EmployeeApi.editEmployee(employee));
    const employees = yield call(EmployeeApi.fetchEmployees);
    yield put({
         type:EmployeeActionTypesReducer.GET_EMPLOYEES,
         payload:employees
    })
}
function *deleteEmployeeAsync(data:IEmployeeAction):Generator<any,any,any>{
    const id = (data.payload as string)
    yield call(()=>EmployeeApi.deleteEmployee(id));
    const employees = yield call(EmployeeApi.fetchEmployees);
    yield put({
         type:EmployeeActionTypesReducer.GET_EMPLOYEES,
         payload:employees
    })
}
function *fetchEmployeeAsync(data:IEmployeeAction):Generator<any,any,any>{
    const id = (data.payload as string)
    const employee:IEmployee = yield call(()=>EmployeeApi.fetchEmployee(id))
    yield put({
        type:EmployeeActionTypesReducer.GET_EMPLOYEE,
        payload: employee
    })
}
function *fetchEmployees(){
    yield takeLatest(EmployeeActionTypes.GET_EMPLOYEES,fetchEmployeesAsync);
}
function *addEmployee(){
    yield takeLatest(EmployeeActionTypes.CREATE_EMPLOYEE,createEmployeeAsync)
}
function *editEmployee(){
    yield takeLatest(EmployeeActionTypes.UPDATE_EMPLOYEE,editEmployeeAsync)
}
function *deleteEmployee(){
    yield takeLatest(EmployeeActionTypes.DELETE_EMPLOYEE,deleteEmployeeAsync)
}
function *fetchEmployee(){
    yield takeLatest(EmployeeActionTypes.GET_EMPLOYEE,fetchEmployeeAsync);
}


export default function *EmployeeSaga (){
    yield all([call(fetchEmployees),call(addEmployee),call(editEmployee),call(deleteEmployee),call(fetchEmployee)])
}