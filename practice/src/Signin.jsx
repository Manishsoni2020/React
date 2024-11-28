import React,{useState} from 'react'

const Signin = () => {
  const[email,setEmail]=useState('');
const[password,setPassword]=useState(''); 

const handleSubmit=(e)=>{
  e.preventDefault();
  const data={email,password} 
  console.log('>>>>data>>>>',data);
  const user=JSON.parse(localStorage.getItem('data'))
  console.log('>>>>user>>>>',user);
  if(data.email===email && data.password === password)
  {
    alert("login successfully")
  }
  else if(data.email !=email)
  {
    alert("email is incorrect")
  }
  else 
  {
    alert("password is incorrect")
  }
  
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{margin:'20px'}}>
          <label htmlFor="">Email </label>
          <input type="email" 
          value={email}
          onChange={(d)=>setEmail(d.target.value)}
          placeholder='enter your Email'
          />
        </div>
        <div style={{margin:'20px'}}>
        <label htmlFor="">Password </label>
          <input type="password" 
          value={password}
          onChange={(d)=>setPassword(d.target.value)}
          placeholder='enter your Password'
          />
        </div>
        <div style={{margin:'20px'}}>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Signin
