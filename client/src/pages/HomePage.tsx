import React, { FC, useEffect } from 'react'
import EmployeeTile from '../components/EmployeeTile';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import {connect} from 'react-redux'
import { DispatchType } from '../redux/store';
import {getEmployees,deleteEmployee} from '../redux/employee/employee.action';
import { IEmployee, IEmployeeState } from '../redux/employee/employee.types';
const Wrapper = styled.div`
     width:60%;
     height:500px;
     margin:auto;
     position:relative;

`;
const Center = styled.div`
      position:relative;
      margin:0;
      top:20%;
`;

const StyledLink = styled(Link)`
     font-weight:bold;
     font-family:courier;
     text-decoration:none;
     color:blue;
`;
interface PropsType {
    fetchEmployees:()=>void;
    employees:IEmployee[];
}

const HomePage:FC<PropsType> = (props:PropsType) => {
    useEffect(() => {
       props.fetchEmployees();
    }, [])
    

    return (
        <Wrapper>
            <Center>
            <p><StyledLink to="/add-employee">+ employee</StyledLink></p>
            {
                props.employees.map((employee:IEmployee,index:number)=>{                             
                    return <EmployeeTile key={index} employee={employee}/>
                })
            }
            </Center>
        </Wrapper>
    )
}
const mapActionToProps = (dispatch:DispatchType)=>({
    fetchEmployees:()=>dispatch(getEmployees()) ,
    deleteEmployee:(id:string)=>dispatch(deleteEmployee(id))
})
const mapStateToProps = (state:any)=>({
    employees:state.employee.employees
})
export default connect<any,any,any>(mapStateToProps,mapActionToProps)(HomePage);
