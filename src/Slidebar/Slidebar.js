import "./Slidebar.css"
import Category from "./Category/Category"
import Price from "./Price/Price"
import Color from "./Colors/Color"

function Slidebar  ()  {
  return (
    <>
        <div className="sidebar">
            <div className="logo-container">
                <h1>
                    <img className="carro" src="./carro.png" />
                </h1>
           <Category/>
           <Price/> 
           <Color/>
            </div>
        </div>
    </>
  )
}
export default Slidebar