import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AddEditEmployeePage from './pages/AddEditEmployeePage';
import EmployeeDetailPage from './pages/EmployeeDetailPage';
import styled from 'styled-components';
const StyledLink = styled(Link)`
  color:grey;
  text-decoration:none;
`;
const NavBar = styled.div`
  text-align:end;
  padding-top:10px;
  padding-right:30px;
`;
const App: React.FC = () => {
  return (
    <Router>
      <NavBar>
        <StyledLink to="/">--Home--</StyledLink>
      </NavBar>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/employees/:id" component={EmployeeDetailPage}/>
        <Route path="/add-employee">
          <AddEditEmployeePage  edit={false}/>
        </Route>
        <Route path="/edit-employee" >
          <AddEditEmployeePage edit={true}/>
        </Route>
      </Switch>
    </Router>
  )
}
export default App;
