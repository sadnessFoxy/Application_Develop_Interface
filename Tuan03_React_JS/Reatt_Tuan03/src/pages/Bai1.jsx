import React, { useState } from 'react';

const UserForm = () => {
const [store,setStore] = useState([])
const [data,setData] = useState({
  name:"",
  email:"",
  age:""
})
const saveHandler = (e)=>{
  e.preventDefault()
  setStore((oldArray) => [
      ...oldArray, 
      { ...data}
    ]);
}
const handler = (e)=>{
  const {name,value} = e.target
  setData((olddata)=>({
   ...olddata,
   [name]:value
  }))
}
return(
 <div>
    <form action="">
    <div>
      <input type="text" name='name' onChange={handler} value={data.name}/>
    </div>
    <div>
      <input type="email" name='email' onChange={handler} value={data.email}/>
    </div>
    <div>
      <input type="number" name='age' onChange={handler} value={data.age}/>
    </div>
    <button onClick={saveHandler}>submit</button>

  </form>
  <div>
    <p>{data.name}</p>
    <p>{data.email}</p>
    <p>{data.age}</p>
  </div>
  <div>
    <ul>
      {store.map((person)=>(
         <div key={person.id}>
           <strong>{person.name}</strong> - {person.email} - {person.age}
         </div>
      ))}
    </ul>
  </div>
 </div>
  
)

};

export default UserForm;