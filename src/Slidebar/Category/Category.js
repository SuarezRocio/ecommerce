import React from "react";
import "./Category.css";

const categories = [
  { value: "capa", title: "Capa" },
  { value: "generador", title: "Generador" },
  { value: "moldura", title: "Moldura" },
  { value: "soporte", title: "Soporte" },
  // Agrega más categorías si es necesario
];

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div className="box">
        <label htmlFor="" className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value=""
            name="category"
          />
          <span className="checkmark"></span>All
        </label>
        {categories.map((category) => (
          <input
            key={category.value}
            onChange={handleChange}
            value={category.value}
            title={category.title}
            name="category"
          />
        ))}
      </div>
    </div>
  );
}

export default Category;


{/*import "./Category.css"
//import  Input from "../../components/Input"

function Category ({handleChange})  {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div className="box">
        <label htmlFor="" className="sidebar-label-container">
        <input onChange={handleChange} type="radio"
        value="capa"
        name="category"
        />
        <span className="checkmark"></span>All
        </label>  
        <input
        handleChange={handleChange}
        value="capa"
        title="capa"
        name="category" 
        />
        <input
        handleChange={handleChange}
        value="generador"
        title="generador"
        name="category" 
        />
        <input
        handleChange={handleChange}
        value="moldura"
        title="moldura"
        name="category" 
        />
        <input
        handleChange={handleChange}
        value="soporte"
        title="soporte"
        name="category" 
        />
       </div>
    </div>
  )
}
export default Category*/}

/** < Input/>
        < Input/>
        < Input/>
        < Input/>
        < Input/>
        < Input/>
        < Input/>
        < Input/>
       */


{/**  

        <label htmlFor=""
        className="sidebar-label-container">
<input type="radio" name="test"/>
        <span className="chackmark">
        </span>All
        </label>
        
        <label htmlFor=""
        className="sidebar-label-container">
          <input type="radio" name="test"/>
        <span className="chackmark">
        </span>Sneakers
        </label> 

        <label htmlFor=""
        className="sidebar-label-container">
          <input type="radio" name="test"/>
        <span className="chackmark">
        </span>Flats
        </label> 
        <label htmlFor=""
        className="sidebar-label-container">
          <input type="radio" name="test"/>
        <span className="chackmark">
        </span>Sandals
        </label> 
        <label htmlFor=""
        className="sidebar-label-container">
          <input type="radio" name="test"/>
        <span className="chackmark">
        </span>Hels
        </label>  */}