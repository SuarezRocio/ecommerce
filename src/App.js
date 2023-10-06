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
  const [showAllProducts, setShowAllProducts] = useState(true);
  const [cart, setCart] = useState([]); // Estado para el carrito de compras


  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  /*const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };*/

  const handleClick = (e) => {
    const buttonValue = e.target.value;
    if (buttonValue === "Products") {
      setShowAllProducts(true); // Show all products
    } else {
      setSelectedCategory(buttonValue); // Set the selected category for filtering
      setShowAllProducts(false); // Hide all products
    }
  };
  

  function filteredData() {
    let filteredProducts = products;

    // Filtering input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    if (showAllProducts) {
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

  const handleSearch = (searchQuery) => {
    // Convert the searchQuery to lowercase for case-insensitive search
    const query = searchQuery.toLowerCase();
  
    // Filter the products based on the search query
    const filteredItems = products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
  
    // Now, filteredItems contains the products that match the search query
    console.log("Search results:", filteredItems);
  
    // You can update the state or perform any other actions with the filtered items here
  };
  

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };


  function filteredData() {
    let filteredProducts = products;
  
    // Filtering input Items
    if (query) {
      filteredProducts = filteredItems;
    }
  
    // Selected filter for price
    if (selectedCategory === "price") {
      // Filter the products based on the selected price range
      filteredProducts = filteredProducts.filter((product) => {
        const productPrice = parseFloat(product.price); // Supongamos que el precio es un número
        if (selectedCategory === "") {
          // Si se selecciona "All" en el filtro de precio, muestra todos los productos
          return true;
        } else if (selectedCategory === "50") {
          return productPrice <= 50;
        } else if (selectedCategory === "100") {
          return productPrice > 50 && productPrice <= 100;
        }
        // Agrega más condiciones para otros rangos de precios si es necesario
      });
    }
  
    // Selected filter for category
    if (selectedCategory === "category") {
      // Filter the products based on the selected category
      filteredProducts = filteredProducts.filter((product) => {
        if (selectedCategory === "") {
          // Si se selecciona "All" en el filtro de categoría, muestra todos los productos
          return true;
        }
        return product.category === selectedCategory;
      });
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
  

  return (
    <div className="App">
      <Nav query={query} handleInputChange={handleInputChange} handleSearch={handleSearch} />
      <Recomended handleClick={handleClick} />
      <div className="content-container"   style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "20px"
    }}>
       <Products result={result} addToCart={ addToCart} />
      
        <Slidebar handleChange={handleChange}  />
      </div>
    {/*<div className="cart-container">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.title}>{product.title}</li>
          ))}
        </ul>
          </div>*/}
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
