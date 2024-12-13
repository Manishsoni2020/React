import React, { useState } from 'react'
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handlesubmit1=(d)=>{
    d.preventDefault()
    const data1 = {
        email,password,phone,address
    }
    // console.log('>>>>data1>>>>',data1);
    localStorage.setItem('user',JSON.stringify(data1));
    

  };
  return (
    <div>
      <form onSubmit={handlesubmit1}>
        <div style={{ margin: '20px' }}>
          <label >Email </label>
          <input type="email"
          value={email}
          onChange={(d)=>setEmail(d.target.value)}
            placeholder='enter your email'
          />
        </div>
        <div style={{ margin: '20px' }}>
          <label >Passwrod </label>
          <input type="password"
          value={password}
          onChange={(d)=>setPassword(d.target.value)}
            placeholder='enter your password'
          />
        </div>
        <div style={{ margin: '20px' }}>
          <label >Phone </label>
          <input type="text"
          value={phone}
          onChange={(d)=>setPhone(d.target.value)}
            placeholder='enter your Phone number'
          />
        </div>
        <div style={{ margin: '20px' }}>
          <label >Address </label>
          <input type="text"
          value={address}
          onChange={(d)=>setAddress(d.target.value)}
            placeholder='enter your Address'
          />
        </div>
        <div style={{ margin: '20px' }}>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Signup
