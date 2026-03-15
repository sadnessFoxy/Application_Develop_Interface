import React, { useEffect, useState } from 'react'
const API_URL = "https://699fb84a3188b0b1d5369e2a.mockapi.io/todos";
function Bai5_custom() {
    const [data,setData] = useState([])
    const [error,setError] = useState("")
    const [inputValue,setInputValue] = useState("")
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        try {
            async function get_fetch(){
                const data_fetch = await fetch(API_URL)
                const res = await data_fetch.json()
                setData(res)
            }
            get_fetch();
        }
        catch (error) {
            setError(error.message)
        }
        finally{
            setLoading(false)
        }
    },[])
    const handleAdd = async (e)=>{
        e.preventDefault()
        if(!inputValue.trim()) return ;
        setLoading(true)
        try {
            const res = await fetch(API_URL,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({name:inputValue,completed:false})
            })
            const new_data = await res.json()
            setData([...data,new_data])
            setInputValue("")
        } catch (error) {
            alert("Error when adding",error.message)
        }finally{
            setLoading(false)
        }
    }
    const handleDelete = async (id)=>{
     const oldData = [...data];
     setData(data.filter(t => t.id !== id));
       try {
        await fetch(`${API_URL}+"/"+${id}`,{method:"DELETE",})
       } catch {
        setData(oldData)
        alert("Fail to delete!!")
       }
    }
  return (
    <div>
      <h2>Todo List - MockAPI</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
       <form action="" onSubmit={handleAdd}>
        <input type="text" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} disabled={loading}/>
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add"}
        </button>
       </form>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}
          <button onClick={()=>handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Bai5_custom