import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { IEmployee } from '../redux/employee/employee.types';
import {connect} from 'react-redux'
import { DispatchType } from '../redux/store';
import {deleteEmployee} from '../redux/employee/employee.action'
const Wrapper = styled.section`
    display:fex;
    justify-context:space-between;
    font-family:courier;
    margin-top:5px;
`;
const StyledButton = styled.button `
   border:none;
   background-color:transparent;
   font-family:courier;
   margin-left:5px;
   color:red;
   outline:none;
`;

const StyledLink = styled(Link)`
    text-decoration:none;
    color:initial;
`;
const TrasparentLink = styled(Link)`
    text-decoration:none;
    color:initial;
`;
interface IPropsType {
    employee:IEmployee;
    deleteEmployee:(id:string)=>void;
}
const EmployeeTile = (props:IPropsType) => {
    return (
        <Wrapper>
            <TrasparentLink to={`/employees/${props.employee.id}`}><p>{props.employee.name}</p></TrasparentLink>
            <div>
                <StyledLink to={{
                    pathname:"/edit-employee",
                    state:props.employee
                }}>edit</StyledLink>
                <StyledButton onClick={()=>{
                    if(props.employee.id != undefined) props.deleteEmployee(props.employee.id);
                }}>delete</StyledButton>
            </div>
        </Wrapper>
    )
}
const mapActionToProps  = (dispatch:DispatchType)=>({
    deleteEmployee:(id:string)=>dispatch(deleteEmployee(id)),
})
export default connect(null,mapActionToProps)(EmployeeTile)
