import "./Slidebar.css"
import Category from "./Category/Category"
import Price from "./Price/Price"
import Color from "./Colors/Color"

function Slidebar  ({handleChange}){
  console.log(handleChange)
  return (
    <>
        <div className="sidebar">
            <div className="logo-container">
                <h1>
                    <img className="carro" src="./carro.png" />
                </h1>
           <Category handleChange={handleChange}/>
           <Price handleChange={handleChange}/> 
           <Color handleChange={handleChange}/>
            </div>
        </div>
    </>
  )
}
export default Slidebar