import React, { useEffect, useState } from 'react'

function TestFor3() {
    const [data, setData] = useState([])
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
     async function get_fetch() {
        try {
            const data_fetch = await fetch("https://jsonplaceholder.typicode.com/users")
            const res = await data_fetch.json()
            setData(res)
        } catch (error) {
            setError(error.message)
        }
        finally{
            setLoading(false)
        }
       } 
     get_fetch()
    },[])
    return (
        <>
        {  
             loading ? (<h1>Loading...</h1>) : (error ? (<h1>{error}</h1>) : (
            data.map((items)=>(
                <div key={items.id}>
                <p>{items.name}</p>
                <p>{items.email}</p>
                </div>
            ))
            ))
            
        }
            
        </>
  )
}

export default TestFor3