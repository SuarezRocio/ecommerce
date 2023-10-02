//import Card from "../Card/Card"
import Slidebar from "../Slidebar/Slidebar"
import "./Products.css"

function Products({result}){
  return (
    <>
       <Slidebar/>
    <section className="card-container">
          {result} 
    </section>
    </>
  )
}
/**<Card/> */

export default Products