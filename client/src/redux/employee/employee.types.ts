export class EmployeeActionTypes {
    static  DELETE_EMPLOYEE = "delete-employee";
    static  UPDATE_EMPLOYEE = 'update-employee';
    static  CREATE_EMPLOYEE = 'create-employee';
    static  GET_EMPLOYEES = 'get-employees';
    static  GET_EMPLOYEE = 'get-employee';
}

export class EmployeeActionTypesReducer {
    static  DELETE_EMPLOYEE= "delete-employee-reducer";
    static  UPDATE_EMPLOYE = 'update-employee-reducer';
    static  CREATE_EMPLOYEE= 'create-employee-reducer';
    static  GET_EMPLOYEES = 'get-employees-reducer';
    static  GET_EMPLOYEE= 'get-employee-reducer';
}


export interface IEmployee  {
    id?:string
    name:string;
    dob:Date;
    salary:number;
    gender:string;
};
export interface IEmployeeAction {
    type:string;
    payload?:IEmployee | string | Array<IEmployee>;
}
export interface IEmployeeState {
    employees:IEmployee[];
    employee:IEmployee | null;
}