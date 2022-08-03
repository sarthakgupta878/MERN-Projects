// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NavBar from './components/Navbar';
import User from './components/User';
import Alert from './components/Alert';

function App() {
  const [alert,setAlert]= useState(null);
  const showAlert = (message,type) =>{
    // console.log("app")
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },21500);
  }
  return (
  <>
  <NavBar/>
  <Alert alert={alert} />
  <User showAlert={showAlert}/>
  </>
  
  );
}

export default App;
