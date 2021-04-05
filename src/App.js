import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/pages/About'
import Capsules from './components/space/Capsules'
import Capsule from './components/space/Capsule'
import Rockets from './components/space/Rockets'
import Login from './components/pages/Login'
import Logout from './components/pages/Logout'
import PrivateRoute from './PrivateRoute'
import Dashboard from './components/pages/Dashboard';
import './App.css';


class App extends Component{

  
  
   
  render(){
    return (
     
     
      <Router>
      <div className='App'>
       
        <div className='container' >
         
          <Switch>
          
          <Route  exact  path='/login' component={Login}/>
          <Route exact path='/about' component={About} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute  exact  path='/logout' component={Logout}/>
            <PrivateRoute exact path='/capsules' component={Capsules} />
            <PrivateRoute exact  path='/capsule/:id'  component={Capsule}  />
            <PrivateRoute exact path='/rockets' component={Rockets} />
            <Route  exact  path='/' component={Login}/>
          </Switch>
    
        </div>
      </div>
      </Router>
     
     
     
    );
  }
  
}

export default App;
