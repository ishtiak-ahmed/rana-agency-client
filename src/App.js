import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()
export const BookContext = createContext()

function App() {
  const [loggedinUser, setLoggedinUser] = useState({})
  const [service, setService] = useState('')
  return (
    <UserContext.Provider value={[loggedinUser, setLoggedinUser]}>
      <BookContext.Provider value={[service, setService]}>
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
      </BookContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
