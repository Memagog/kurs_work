import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from './Components/Login/Login';
import CreateEvent from './Components/CreateIventPage/CreateIvent';
import Register from './Components/Registration/Register';
function App() {
  return (
    <div>
       <Router>
      <div>        
        <ul class="nav">
        <li class="nav-item">
        <Link class="nav-link active" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/login">Profile</Link>
        </li>
        <li class="nav-item">
        <Link  class="nav-link" to="/create">CreateEvent</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link disabled" href="/create">Disabled</Link>
        </li>

          {/* <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">          
            <form class="d-flex">
              <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
          </nav> */}
      </ul>
        <hr />
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
      </div>
    </Router>
    </div>
  );
}

export default App;
