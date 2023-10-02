import Input from "../../components/Input"
import "./Price.css"

function Price  ({handleChange}) {
  console.log(handleChange)
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">
        Price
      </h2>
      
    <label className="sidebar-label-container">
    <input onChange={handleChange} type="radio" name="test" value=""/>
    <span className="checkmark">
    </span>All
    </label>
   <Input
    handleChange={handleChange}    
    value={50}
    title="$0 - 50"
    name="test2"
    />
    
    <Input
    handleChange={handleChange}    
    value={100}
    title="$50 - 100"
    name="test2"
    />
    <Input
    handleChange={handleChange}    
    value={150}
    title="$100 - 150"
    name="test2"
    />
    <Input
    handleChange={handleChange}    
    value={200}
    title="Over $150"
    name="test2"
    />
      </div>
  )
}

export default Price

/**     <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
       */





{/**<label htmlFor=""
        className="sidebar-label-container">
          <input type="radio" name="test2"/>
        <span className="chackmark">
        </span>All
        </label> 
        
      <label htmlFor=""
        className="sidebar-label-container">
          <input type="radio" name="test2"/>
        <span className="chackmark">
        </span>$0 - $50
        </label> 
        
      <label htmlFor=""
        className="sidebar-label-container">
          <input type="radio" name="test2"/>
        <span className="chackmark">
        </span>$50 - $100
        </label> 
        
      <label htmlFor=""
        className="sidebar-label-container">
          <input type="radio" name="test2"/>
        <span className="chackmark">
        </span>$100 - $150
        </label> 
        
      <label htmlFor=""
        className="sidebar-label-container">
          <input type="radio" name="test2"/>
        <span className="chackmark">
        </span>Over: $150
        </label> 
    */}