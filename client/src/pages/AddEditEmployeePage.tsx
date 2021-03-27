import React, { useState } from 'react'
import { RouteComponentProps, withRouter, useLocation } from 'react-router';
import styled from 'styled-components';
import { IEmployee } from '../redux/employee/employee.types';
import {DateFormat} from '../util';
import {connect} from 'react-redux'
import { DispatchType } from '../redux/store';
import {createEmployee,updateEmployee} from '../redux/employee/employee.action'
const Wrapper = styled.div`
    width:50%;
    height:250px;
    margin:auto;
    position:relative;
    font-family:courier;

`;
const Center = styled.div`
    position:absolute;
    top:40%;
    left:0;
    right:0;
`;
const StyledInput = styled.input`
    width:100%;
    outline:none;
`;
const StyledLabel = styled.p`
    font-weight:600;

`;
const EditButton = styled.button`
    background-color:transparent;
    padding:3px 15px;
    border:1px solid green;
    outline:none;
    border-radius:5px;
    font-family:courier;
`;
const CancelButton = styled(EditButton)`
    background-color:green;
    color:white;
`;

interface IPropsType extends RouteComponentProps<{ id: string }> {
    edit: boolean;
    editEmployee:(employee:IEmployee)=>void;
    createEmployee:(employee:IEmployee)=>void;
}

const AddEditEmployeePage: React.FC<IPropsType> = (props: IPropsType) => {
    const { state } = useLocation<IEmployee>()
    const [name, setName] = useState(props.edit ? state.name : "");
    const [dob, setDob] = useState(props.edit ? state.dob : new Date());
    const [gender, setGender] = useState(props.edit ? state.gender : "");
    const [salary, setSalary] = useState(props.edit ? state.salary : 0);

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name;
        switch (name) {
            case "name":
                setName(e.currentTarget.value);
                break;
            case "date":
                setDob(new Date(e.currentTarget.value));
                break;
            case "gender":
                setGender(e.currentTarget.value);
                break;
            case "salary":
                setSalary(Number(e.currentTarget.value));
                break;
        }
    };

    const cancelHandler =()=>{
        props.history.push('/');
    }
    const submitHandler = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(props.edit){
            props.editEmployee({
                dob,
                gender,
                name,
                salary,
                id:state.id
            })
        }else{
            props.createEmployee({
                dob,
                gender,
                name,
                salary
            })
        }
        props.history.push('/')
    }
    return (
        <Wrapper>
            <Center>
                <form onSubmit={submitHandler}>
                    <StyledLabel>Name</StyledLabel>
                    <StyledInput type="text" value={name} onChange={handleOnChange} name="name" /><br />
                    <StyledLabel>Date of Birth: </StyledLabel>
                    <StyledInput type="date" value={DateFormat.toYYYYMMDD(dob)} onChange={handleOnChange} name="date" /><br />
                    <StyledLabel>Gender </StyledLabel>
                    <div>
                        Male: <input type="radio" name="gender" onChange={handleOnChange} value="male" checked={gender=="male"} />   &nbsp;
                    Female: <input type="radio" name="gender" onChange={handleOnChange} value="female" checked={gender=="female"} />
                    </div>
                    <StyledLabel>Salary</StyledLabel>
                    <StyledInput type="number" value={salary} onChange={handleOnChange} name="salary" /><br /><br />
                    <EditButton type="submit">{props.edit ? "edit" : "create"}</EditButton> &nbsp;
                    <CancelButton type="button" onClick={cancelHandler}>cancel</CancelButton> &nbsp;
                </form>
            </Center>
        </Wrapper>
    )
}

const mapActionToProps = (dispatch:DispatchType)=>({
    editEmployee:(employee:IEmployee)=>dispatch(updateEmployee(employee)),
    createEmployee:(employee:IEmployee)=>dispatch(createEmployee(employee))
});
export default connect(null,mapActionToProps)(withRouter(AddEditEmployeePage));
