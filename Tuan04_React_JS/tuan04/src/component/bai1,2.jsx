
import { useEffect, useState } from 'react'

function Bai1_2() {
  const api = "https://jsonplaceholder.typicode.com/users"
  const [data, setData] = useState([])
  const [loading,setLoading] = useState(true)
  const [error, setError] = useState(null)
  // useEffect(()=>{
  //   fetch(api)
  //   .then((res)=>{
  //     return res.json()
  //   })
  //   .then((datafetch)=>{
  //     setData(datafetch)
  //     return datafetch
  //   })
  // },[])
  useEffect(()=>{
    async function getFetch() {
      try {
        const res = await fetch(api)
        const datafetch = await res.json()
        setData(datafetch)
      } catch(error){
        setError(error.message)
      }
      finally{
        setLoading(false)
      }
    }
    getFetch()
  },[])
   

  return (
    <>
      {
        loading ? (console.log("Loading...")):( error ? (console.log(error)) : (
          data.map((items)=>(
            <div key={items.id}>
              <p>{items.name}</p>
              <p>{items.email}</p>
            </div> 
          ))
        )
      )
      }
        
    </>
  )
}

export default Bai1_2