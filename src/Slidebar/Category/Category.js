import "./Category.css"
import  Input from "../../components/Input"

function Category ({handleChange})  {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label htmlFor="" className="sidebar-label-container">
        <input onChange={handleChange} type="radio"
        value=""
        name="test"
        />
        <span className="checkmark"></span>All
        </label>  
        <input
        handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name="test"
        />
        <input
        handleChange={handleChange}
        value="falts"
        title="Falts"
        name="test"
        />
        <input
        handleChange={handleChange}
        value="sandals"
        title="Sandals"
        name="test"
        />
        <input
        handleChange={handleChange}
        value="heels"
        title="Heels"
        name="test"
        />
       </div>
    </div>
  )
}
export default Category

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