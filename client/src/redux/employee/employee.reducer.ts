import { IEmployee, IEmployeeState,IEmployeeAction, EmployeeActionTypes, EmployeeActionTypesReducer } from './employee.types';
const initialState:IEmployeeState = {
    employee:null,
    employees:[],
};
const employeeReducer = (state=initialState,action:IEmployeeAction)=>{
    switch(action.type){
       
        case EmployeeActionTypesReducer.GET_EMPLOYEES:
            {
                const newState = {
                    ...state,
                    employees:(action.payload as Array<IEmployee>)
                };
                console.log("fetching..");
                
                return newState;
            } 
        case EmployeeActionTypesReducer.DELETE_EMPLOYEE:
            {     
                const employees  = action.payload as Array<IEmployee>;         
                const newState = {
                    ...state,
                    employees:employees,
                };
                return newState;
            } 
        case EmployeeActionTypesReducer.GET_EMPLOYEE:
            {
                const employee  = action.payload as IEmployee;         
                const newState = {
                    ...state,
                    employee:employee
                };
                console.log(newState);
                
                return newState;
            }
            

            
    }
    return state;

}
export default employeeReducer;