 import React from 'react'
import { recoilUser } from '../recoil/recoilUser'
import {useRecoilState} from "recoil"
import {useNavigate} from "react-router-dom"

 
 function Logout() {
    const [user,setUser]  = useRecoilState(recoilUser)
    const navigate = useNavigate()
    function handleLogout(){
        setUser(null)
        navigate("/")
    }
   if(!user.status){
    return (
        <div>
            <h1>Loging out when you still not login yet?</h1>
            <button onClick={()=>navigate("/")}>back to login</button>
        </div>
    )
   }
   return(
    <div>
        <h1>See you later, {user.name}</h1>
       <button onClick={handleLogout}>Logout</button>
    </div>
   )
 }
 
 export default Logout