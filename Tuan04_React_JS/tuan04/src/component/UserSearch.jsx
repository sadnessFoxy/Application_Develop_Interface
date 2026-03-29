import React, { useEffect, useState } from 'react'
const api = `https://jsonplaceholder.typicode.com/users`
function UserSearch() {
    const [data,setData] = useState([])
    const [search,setSeacrh] = useState(0)
    useEffect(()=>{
        const get_fetch = async ()=>{
           const res = await fetch(`${api}/${search}`) 
           const data_fetch = await res.json()
           setData(data_fetch)
        }
        get_fetch()
    },[search])
  return (
    <div>
      <input type="text" value={search} onChange={(e)=>{setSeacrh(e.target.value)}} />
      {
          <div key={data.id}>
            <p>{data.name}</p>
            <p>{data.email}</p>
          </div>
      }
    </div>
  )
}

export default UserSearch