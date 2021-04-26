import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,  
  Redirect
} from "react-router-dom";
import Login from './Components/Login/Login';
import CreateEvent from './Components/CreateIventPage/CreateIvent';
import Register from './Components/Registration/Register';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div>
       <Router>             
        <Navbar/>
          <Switch>
            <Route exact path="/">
            <Home/>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/create">
              <CreateEvent/>
            </Route>
            <Route exact path="/register">
            <Register/>
            </Route>
            <Redirect to="/"/>             
          </Switch>      
    </Router>
    </div>
  );
}

export default App;
