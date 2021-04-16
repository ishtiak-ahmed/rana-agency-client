import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [loggedinUser, setLoggedinUser] = useState({})
  return (
    <UserContext.Provider value={[loggedinUser, setLoggedinUser]}>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home></Home>
          </Route>
          <Route path='/about' >

          </Route>
          <Route path='/service'>
            servie
        </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
