import React from "react"
import  Nav  from "./Navigation/Nav";
import  Products  from "./Products/Products";
import Recomended from "./Recomended/Recomended";
import Slidebar "./Slidebar/Slidebar"

function App() {
  return (
    <div className="App">
    
    <Nav/>
    <Products/>
    <Recomended/>
    <Slidebar/>
    </div>
  );
}

export default App;
