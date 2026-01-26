import React, { useState } from 'react'
import './Bai3.css'

function Bai3() {
  const [form,setForm] = useState({
    name:"",
    emial:""
  })
  const handle_change =(e)=>{
    const {name,value} = e.target; // 
     setForm({
       ...form,
       [name]:value
     })
  }
  
  return (
      <div className='container2'>
          <div className='form-login'>
            <h1 className='login'>Form Login</h1>
            <div className='name-input' >Họ và tên: </div>
            <input type="text" name="name" placeholder='Họ và tên' onChange={handle_change} value={form.name}/>
            <div className='email-input'>Email:</div>
             <input className='email' name="email" type="text" onChange={handle_change} value={form.email} placeholder='Email'/>
             <hr />
             <div className='info'>
                  <h5>Thông tin nè: </h5>
                  <span>Họ và tên: <span>{form.name}</span>  </span>
                  <span>Email: <span>{form.email}</span>  </span>
             </div>
          </div>
     
      
    </div>

  )
}

export default Bai3