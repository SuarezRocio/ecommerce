

function Input ({handleChange, value, title, name, color})  {
  return (
    <label className="sidebar-label-container">
    <input onChange={handleChange} type="radio" name="test" value={value}/>
    <span className="checkmark"
    style={{backgroundColor:color}}
    name="test2">
    </span>
    {title}
    All
    </label>
    )
}

export default Input