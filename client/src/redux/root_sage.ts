import {all,call} from 'redux-saga/effects';
import employeeSaga from './employee/employee.saga'
export default function * RootSaga(){
    yield all([call(employeeSaga)]);
}