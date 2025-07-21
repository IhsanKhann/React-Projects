import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(10)

  // Handling forms--
  const handleSubmit = (e) => {
    e.preventDefault() ; // stop the default refresh behaviour.
    alert(value) ;
  }

  const handleChange = (e) => {
    let changedValue = e.target.value ;
    setValue(changedValue);
  }

  const [newValue,setNewValue] = useState({
    username: ''
    ,password: ''
  })

  const handleMultipleChange = (e) => {
      let name = e.target.name ;
      let Assignedvalue = e.target.value ;

      setNewValue(({...newValue,
        [name]:Assignedvalue
      }))
  }

  const handleMultipeSubmit = (e) => {
    e.preventDefault() 
    alert(`Username:${newValue.username} Password: ${newValue.password}`) ;
  }

  let [myCar,setMyCar] = useState(""); 
  const handleSelectChange = (e) => {
    setMyCar(e.target.value);
    // alert(myCar) ;
  }
  
  let [textareaValue, setTextAreaValue] = useState("Hello world")
  let handleTextArea = (e) => {
    setTextAreaValue(e.target.value) ;
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" value={value} onChange={(e) => handleChange(e)}/>
      </form>

      <form onSubmit={(e)=> handleMultipeSubmit(e)}>

        <label htmlFor='username'>Username:</label>
        <input type="text" id="username" name='username' value={newValue.username || ""}onChange={(e)=> handleMultipleChange(e)} />
        
        <label htmlFor='password'>Password:</label>
        <input type="text" id="password" name="password" value={newValue.password || ""} onChange={(e)=>handleMultipleChange(e)} />

        <textarea value={textareaValue} onChange={handleTextArea}> </textarea>

        <select value={myCar} onChange={handleSelectChange}> 
          <option value="Ford" > Ford </option>
          <option value="Mustang" > Mustang </option>
          <option value="C6" > C6 </option>
          <option value="Audi" > Audi </option>
        </select>
      </form>

    </>
  )
}

export default App

// Handling Forms:
// input fields..onChange() value change..because its a controlled component

// Forms => handleSubmit => we stop the default behaviour of the form because we want our own handling/custom logic.

// for multiple fields make an object and then give each one a name.
// use Events onchange,onSubmit and lastly the useState hook and the forms can be handled with ease.