import React, { useState } from 'react'

const Todotest = () => {

    const[newname,setNewname]=useState();
    const[task,setTask]=useState([]);
    const addname=(d)=>{
      d.preventDefault()
      setTask([...task,{newname}])
      setNewname("")
      console.log(task);
      
    }
    const removename=(i)=>{  
        let copytask=[...task]
        copytask.splice(i,1)
        setTask(copytask)
    }
    let rendertaks=<h2>No task available</h2>

    rendertaks=task.map((t,i)=>{
      return(
        <li>
          <div>
            <h5>{t.newname}</h5>
            <div onClick={removename} style={{margin:'20px'}}><button>Delete</button></div>
          </div>
        </li>
      );
    });
   
  return (
    <div>
      <form onSubmit={addname}>
      <div style={{margin:'20px'}}>
        <label >Name:</label>
        <input type="text"
        placeholder='Enter you name'
        value={newname}
        onChange={(e)=>{
          setNewname(e.target.value)
        }}
        />
      </div>
      <div onClick={addname} style={{margin:'20px'}}><button>Add</button></div>
      
      </form>
      <hr />
      <div style={{padding:'5px', backgroundColor:"slategray"}}>
        <ul>{rendertaks}</ul>
        </div>      
    </div>
  )
}

export default Todotest
