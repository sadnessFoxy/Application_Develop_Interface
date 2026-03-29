import React, { useState,useEffect} from 'react'

function UserSearchName() {
    const [data,setData] = useState([])
    const [search,setSearch] = useState("")
    const api = `https://jsonplaceholder.typicode.com/users`

    useEffect(()=>{
        const get_fetch = async ()=>{

            try {
                const res = await fetch(api)
                const data = await res.json()
                setData(data)
            } catch (error) {
                alert(error.message)
            }
        }
        get_fetch()
    },[])
    const filtered = data.filter(user=>user.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
        <input type="text" onChange={(e)=>{setSearch(e.target.value)}} />
        {
            filtered.map(user=>(
                <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
            ))
            
        }
        
    </div>
  )
}

export default UserSearchName