import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dropdown, setList] = useState('');
  const [declare, setDeclare] = useState('false');
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name, gender, role, declaration
    }
    console.log(`>>>>>data>>>>>`, data)

  };
  return (


    <form onSubmit={handleSubmit}>
      <div> 
        <label>Name </label>
        <input
          type="text"
          placeholder='enter your name'
          name='Name'
        />
      </div>
      <div>
        <label >Gender</label>
        <option value="">Male</option>
        <input type="radio" name='Gender' />
        <option value="">Female</option>
        <input type="radio" name='Gender' />
      </div>
      <div>
        <label>Chose a fruits</label>
        <br />
        <select name="fruits" id="fruits">
          <option value="apple">apple</option>
          <option value="Banana">banana</option>
          <option value="Graps">graps</option>
          <option value="papaya">papaya</option>
        </select>
      </div>
      <div>
        <input type="checkbox" />
        <label >Declaration</label>
      </div>
      <div> 
        <button type='submit'>submit</button>
      </div>
    </form>


  )
}

export default Form
