import React,{useContext,useState,useEffect} from 'react'
import { observer } from "mobx-react-lite";
import { BrowserRouter as Router} from "react-router-dom";
import { Context } from ".";
import Navbar from "./comp/Navbar";
import AppRouter from './comp/Routing/AppRouter';
import { check } from './http/userAPI';

const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   check().then(data=> {
    //  user.setUser(true)
     user.setIsAuth(true)
   }).finally( ()=> setLoading(false))
  }, []);
  return (  
    <div>
       <Router>
         <Navbar/>
         <AppRouter/>  
       </Router>
    </div>
  );
})

export default App;
