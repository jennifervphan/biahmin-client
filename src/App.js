import React from 'react';
import {Route} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
function App() {
  return (
    <>
      <Route exact path="/" render={(routeProps)=><Home {...routeProps}/>}></Route>
      <Route path="/shop" render={(routeProps)=><Shop {...routeProps}/>}></Route>
    </>
  );
}

export default App;
