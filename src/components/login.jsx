import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Loginpage = () =>{
  const[username,setusername]=useState('')
  const[password,setPassword]=useState('')
  const navigate = useNavigate();
  const handlelogin = async(event)=>{
    event.preventDefault()
        
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };


      const bodyHeaders = JSON.stringify({
        username: username,
        password: password
      });

      try {
        let response = await fetch('https://doctorbackend-5r3j.onrender.com/api/login', {
          method: "POST",
          body: bodyHeaders,
          headers:headersList,
        });
        let code = await response.json()
        if(code.code == 201){
          navigate('/homepage')
        }
        else(
          alert("wrong password")
        )
      }

      catch(error){
   console.log(error)
      }
  }
  const handleregister = async ()=>{
    navigate('/')
  }

    return(
    <div style={{marginLeft:"600px"}}>
      <div>
        <h1 >Username</h1>
        <input type="text" onChange={(e)=>setusername(e.target.value)}/>
        <h1>Password</h1>
        <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
       
      </div>
      <button onClick={handlelogin}>Login</button>
      <button onClick={handleregister}>Register</button>
    </div>)
}

export default Loginpage