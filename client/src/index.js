import React,{createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './mobX/store/UserStore';
import EventsStore from './mobX/store/EventsStore';
import TypesStore from './mobX/store/TypesStore';
import ParametersStore from './mobX/store/ParameterStore';
export const Context = createContext(null)
ReactDOM.render(
  <React.StrictMode> 
    <Context.Provider value={{
      user: new UserStore(),
      events: new EventsStore(),
      types: new TypesStore(),
      param: new ParametersStore(),
    }}>
      <App />   
    </Context.Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
