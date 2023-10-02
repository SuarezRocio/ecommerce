import Buttons from "../components/Buttons"
import "./Recomended.css"


function Recomended ({handleClick})  {
  return (
    <>
      <div className="recommended-flex">
        <h2>Recomended</h2>
        <div className="recommended-btns">
          <button className="btns"
          value=""
          title="All Products"
          >
            All Products
          </button>
          <Buttons onClickHandler={handleClick}
          value="All Products"
          title="All Products"/>
          <Buttons onClickHandler={handleClick}
          value="Nike"
          title="Adidas"/>
          <Buttons onClickHandler={handleClick}
          value="Nike"
          title="Puma"/>
          <Buttons onClickHandler={handleClick}
          value="Nike"
          title="Vans"/>
          <Buttons onClickHandler={handleClick}
          value="Nike"
          title="Vans"/>
          </div>
      </div>
    </>
  )
}

{/** <button className="btns">
          Nike
          </button>
          <button className="btns">
          Adidas
          </button>
          <button className="btns">
          Puma
          </button>
          <button className="btns">
          Vans
          </button>
 */}

export default Recomended