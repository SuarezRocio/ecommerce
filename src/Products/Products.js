import Card from "../Card/Card"
import Slidebar from "../Slidebar/Slidebar"
import "./Products.css"

function Products  ()  {
  return (
    <>
       <Slidebar/>
    <section className="card-container">
         <Card/>  
    </section>
    </>
  )
}


export default Products