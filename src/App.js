import React from 'react';
import {Route} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Login from "./components/authentication/Login.jsx";
import Register from "./components/authentication/Register.jsx";

function App() {
  return (
    <>
      <Route exact path="/" render={(routeProps)=><Home {...routeProps}/>}></Route>
      <Route path="/shop" render={(routeProps)=><Shop {...routeProps}/>}></Route>
      <Route path="/login" render={()=><Login/>}></Route>
      <Route path="/register" render={()=><Register/>}></Route>
    </>
  );
}

export default App;
