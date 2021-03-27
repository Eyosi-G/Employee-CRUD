import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import {connect} from 'react-redux'
import { DispatchType } from '../redux/store';
import {getEmployee} from '../redux/employee/employee.action'
import { IEmployee } from '../redux/employee/employee.types';
const Wrapper = styled.div`
    width:50%;
    height:250px;
    margin:auto;
    position:relative;
    font-family:courier;

`;
const Center = styled.div`
    position:absolute;
    top:50%;
    left:0;
    right:0;
`;
const StyledTable = styled.table`
    width:100%;
`;
const StyleTD = styled.td`
    font-weight:600;
`;
interface IPropsType extends RouteComponentProps<{id:string}>{
    fetchEmployee:(id:string)=>void;
    employee:IEmployee;
}

const EmployeeDetailPage:React.FC<IPropsType> = (props:IPropsType) => {
    const id:string = props.match.params.id;    
    useEffect(()=>{
        props.fetchEmployee(id);
    },[]);
    return (
        <Wrapper>
            <Center>
                <StyledTable>
                    <tbody>
                        <tr>
                            <StyleTD>Name</StyleTD>
                            <td>{props.employee?.name}</td>
                        </tr>
                        <tr>
                            <StyleTD>Gender</StyleTD>
                            <td>{props.employee?.gender}</td>
                        </tr>
                        <tr>
                            <StyleTD>Date Of Birth</StyleTD>
                            <td>{props.employee?.dob?.toDateString()}</td>
                        </tr>
                        <tr>
                            <StyleTD>Salary</StyleTD>
                            <td>{props.employee?.salary} ETB</td>
                        </tr>
                    </tbody>
                </StyledTable>
                
            </Center>
        </Wrapper>
    )
}
const mapActionToProps = (dispatch:DispatchType)=>({
    fetchEmployee:(id:string)=>dispatch(getEmployee(id))
})
const mapStateToProps= (state:any)=>({
    employee:state.employee.employee
})
export default connect<any,any,any>(mapStateToProps,mapActionToProps)(EmployeeDetailPage);
