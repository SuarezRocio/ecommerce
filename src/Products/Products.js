//import Card from "../Card/Card"
//import Slidebar from "../Slidebar/Slidebar"
import Card from "../Card/Card"
import "./Products.css"

function Products({result , addToCart}){
  return (
    <>
    <section className="card-container">
    {result}   
    </section>
    </>
  )
}
/**<Card/> */
//{result}

{/*     {result.map((product) => (
        <div key={product.title} className="product">
          <Card {...product} />
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
     ))}*/}
export default Products