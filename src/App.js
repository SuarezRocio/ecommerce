import React, { useState } from "react"
import  Nav  from "./Navigation/Nav";
import  Products  from "./Products/Products";
import Recomended from "./Recomended/Recomended";
import Slidebar from "./Slidebar/Slidebar";
import products from "./db/data"; 

//42:14
//https://www.youtube.com/watch?v=lfm_Hu0hEms

function App() {

const [ selectedCategory , setSelectedCategory]= useState(null)
const[query, setQuery] = useState("")


//importando los productos de la base de datos 


//input Filter-------------------------------//



//pasamos un string vacio


const handleInputChange = event => {
  setQuery( event.target.value)
}


const filteredItems = products.filter(( product) => 
product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1
))


//---RadioFilter---//
const handleChange = event => {
  setSelectedCategory(event.target.value)
}


//ButtonFilter---//
const handleClick = event => {
  setSelectedCategory(event.target.value)
}

function filteredData(products, selected){

}


  return (
    <div className="App">
    <Nav/>
    <Recomended/>
    <Products/>
    <Slidebar/>
    </div>
  );
}
  
export default App;
