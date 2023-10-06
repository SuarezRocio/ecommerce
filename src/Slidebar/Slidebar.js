import "./Slidebar.css"
import Category from "./Category/Category"
import Price from "./Price/Price"
//import Color from "./Colors/Color"
import iphone from "../assets/iphone.jpg"

function Slidebar  ({handleChange}){
  console.log(handleChange)
  return (
    <>
        <div className="sidebar">
            <div className="logo-container">
           <h1>
         {/*   <img src="https://i.ibb.co/qxv5Byx/iphone.jpg" 
            className="celular"
        />*/}
           <div phone src={iphone}></div> 
           </h1>
        {/*   <Category handleChange={handleChange}/>
           <Price handleChange={handleChange}/> */}
         {/*<Color handleChange={handleChange}/>*/}
            </div>
        </div>
    </>
  )
}
export default Slidebar