import React, { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recomended from "./Recomended/Recomended";
import Slidebar from "./Slidebar/Slidebar";
import products from "./db/data";
import Card from "./Card/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData() {
    let filteredProducts = products;

    // Filtering input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected filter
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.category === selectedCategory ||
          product.color === selectedCategory ||
          product.company === selectedCategory ||
          product.newPrice === selectedCategory ||
          product.title === selectedCategory
      );
    }

    return filteredProducts.map(({ img, title, star, reviews, prevPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={prevPrice}
      />
    ));
  }

  const result = filteredData();

  return (
    <div className="App">
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recomended handleClick={handleClick} />
      <Products result={result} />
      <Slidebar handleChange={handleChange} />
    </div>
  );
}

export default App;


{/*import React, { useState } from "react"
import  Nav  from "./Navigation/Nav";
import  Products  from "./Products/Products";
import Recomended from "./Recomended/Recomended";
import Slidebar from "./Slidebar/Slidebar";
import products from "./db/data"; 
import Card from "./Card/Card";

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
const handleChange = e=> {
  setSelectedCategory(e.target.value)
}

const handleClick = e=> {
  setSelectedCategory(e.target.value)
}



//ButtonFilter---//
 // setSelectedCategory(e.target.value)


function filteredData(products, selected, query){
let filteredProducts = products 


//Filtering input Items 
if(query){
  filteredProducts = filteredItems()
}

//Selected filter 
if(selected){
  filteredProducts = filteredProducts.filter(({
    product 
  }) => 
  product.category === selected ||
  product.color === selected ||
  product.company === selected ||
  product.newPrice === selected || 
  product.title === selected)

/** category, 
    color,
    company,
    newPrice,
    title */
 /*   filteredProducts.map(({img, title, star, reviews, prevPrice}) => {
      <Card 
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={prevPrice}
      />
     }) 
}
const result = filteredData(products, selectedCategory.query)


  return (
<div className="App">
    <Nav query={query} handleInputChange={handleInputChange}/>
    <Recomended handleClick={handleClick}/>
    <Products result={result}/>
    <Slidebar handleChange={handleChange}/>
  </div>
  );
}
}
export default App;*/}
