import React,{useState} from 'react'

const Form = () => {
    const[name,setName]=useState('');
    const[gender,setGender]=useState('');
    const[dropdown,setList]=useState('');
    const[declare,setDeclare]=useState('false');
  return (
    <div>
    <form action="">
    <label htmlFor="Name">Name </label>
    <input type="text" placeholder='enter your name' name='Name'/>
    <br />
    <label htmlFor="Gender">Gender</label>
    <option value="">Male</option>
    <input type="radio" name='Gender'/>
    <option value="">Female</option>
    <input type="radio" name='Gender'/>
    <br />
    <label htmlFor="fruits">Chose a fruits</label>
    <br />
    <select name="fruits" id="fruits">
        <option value="apple">apple</option>
        <option value="Banana">banana</option>
        <option value="Graps">graps</option>
        <option value="papaya">papaya</option>
    </select>
    <br />
    
    <input type="checkbox" />
    <label htmlFor="declare">Declaration</label>
    <br />
    <input type="submit" />
    </form>

    </div>
  )
}

export default Form
