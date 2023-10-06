import Input from "../../components/Input";
import "./Colors.css"

function Color ({handleChange}) {
  return (
    <div>
    <label className="sidebar-label-container">
    <input onChange={handleChange} type="radio" name="test" value=""/>
    <span className="checkmark all"> 
    </span>All
    </label>

    <Input 
    handleChange={handleChange}
    value="black"
    title="Black"
    name="test1"
    color="black"
    />

    <Input 
    handleChange={handleChange}
    value="blue"
    title="Blue"
    name="test1"
    color="blue"
    />
    <Input 
    handleChange={handleChange}
    value="red"
    title="Red"
    name="test1"
    color="red"
    />
    <Input 
    handleChange={handleChange}
    value="green"
    title="Green"
    name="test1"
    color="green"
    />
    <Input 
    handleChange={handleChange}
    value="white"
    title="White"
    name="test1"
    color="white"
    />

    <label 
    className="sidebar-label-container"
    >
     <input type="radio" onChange={handleChange}
      value="white"
      name="test1"
      /> 
      <span className="checkmark"
      style={{
        background: "white",
        border: "2px solid black",
        color: "black"
      }}>
      </span>
    </label>
    </div>
  )
}

export default Color;

/**   
      <h2 
      className="sidebar-title  color-title">
        Colors
      </h2>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>  
 */

{/***      <Input/>
       <label htmlFor=""
        className="sidebar-label-container color-title">
          <input type="radio" name="test2"/>
        <span className="chackmark">
        </span>All
        </label> 
        <Input/>
      <label htmlFor=""
        className="sidebar-label-container">
          <input type="radio" name="test2"/>
        <span className="chackmark">
        <input type="checkbox"/>
        </span>Black
        </label> 
        <Input/>
      <label htmlFor=""
        className="sidebar-label-container">
          <input type="radio" name="test2"/>
        <span className="chackmark">
        </span>Blue
        </label> 
        <Input/>
      <label htmlFor=""
        className="sidebar-label-container">
          <input type="radio" name="test2"/>
        <span className="chackmark">
        </span>Red
        </label> 
        <Input/>
      <label htmlFor=""
        className="sidebar-label-container">
          <input type="radio" name="test2"/>
        <span className="chackmark">
        </span>Green    
      </label> 
      <Input/>
      <label htmlFor=""
        className="sidebar-label-container">
          <input type="radio" name="test2"/>
        <span className="chackmark">
        </span>White    
      </label> 
     */}