import React,{useEffect,useState} from 'react'

function Bai3() {
    const [id,setId] = useState(0)
    const [inputId, setInputId] = useState("")
    const [data,setData] = useState({})
    useEffect(()=>{ 
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data =>setData(data))
    }, [id])
    function handleClick(){ 
        setId(inputId)
    }
  return (
    <div>
      <input type="number" placeholder="Nhập id để get fetch" value={inputId} onChange={(e) => setInputId(e.target.value)} />
      <button onClick={handleClick}>Let's go</button>
        <p>{data.name}</p> 
        <p>{data.email}</p>
    </div>
   )
}

export default Bai3