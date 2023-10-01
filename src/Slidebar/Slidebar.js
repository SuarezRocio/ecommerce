import "./Slidebar.css"
import Category from "./Category/Category.css"
import Price from "./Price/Price"
import Colors from "./Colors/Color"

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
           <Colors/>
            </div>
        </div>
    </>
  )
}
export default Slidebar