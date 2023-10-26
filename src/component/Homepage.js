import React from 'react';  
import ReactDOM from 'react-dom';  
// import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'  
// import AdDashboard from './AdvisoryDashboard';  
// import PCDashboard from './PlacementCellDashboard';  
// import DeanColgDashboard from './DeanColgDashboard';
import { BrowserRouter, Switch ,Route} from 'react-router-dom';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';
import AdminDashboard  from './AdminDashboard';
 
 import Login from './Login' 
  
function HomePage(){
    return(
      <BrowserRouter>
          <Switch>
            <Route path="/" ><Login/></Route>
            <Route path="/AdminDashboard"><AdminDashboard/></Route>
          {/* <PublicRoute restricted={true} component={Login} path="/" exact />
          <PrivateRoute path="/AdminDashboard" exact component={AdminDashboard} >
            {extraProps => <AdminDashboard {...extraProps} dummy={"Heloo wrold"}/>}
          </PrivateRoute> */}
          {/* <PrivateRoute path="/BillingDashboard/:id" exact >
            {extraProps => <BillingDashboard {...extraProps} dummy={"Heloo wrold"}/>}
          </PrivateRoute>             */}
          </Switch>
        </BrowserRouter>
  //       <Router>  
  //   <div>  
  //     <h1>React Router Example</h1>  
  //     <Route exact path="/" component={Login} />  
  //      <Route path="/AdDashboard" component={AdDashboard} />  
  //     <Route path="/PCDashboard" component={PCDashboard} />  
  //     <Route path="/DeanColgDashboard" component={DeanColgDashboard} /> 
  //     <Route path="/AdminDashboard" component={AdminDashboard} />  
  //   </div>  
  // </Router>

    )
}
export default HomePage