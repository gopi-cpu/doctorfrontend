import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reenteredPassword, setReenteredPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleReenteredPasswordChange = (e) => {
    setReenteredPassword(e.target.value);
  };

  const handleRegister = async (event) => {
    event.preventDefault()
    if (password !== reenteredPassword) {
      setError('Passwords do not match');
      return;
    }

     
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };


    const bodyHeaders = JSON.stringify({
      username: username,
      password: password
    });

    try {
      let response = await fetch('https://doctorbackend-5r3j.onrender.com/api/register', {
        method: "POST",
        body: bodyHeaders,
        headers:headersList,
 
      });

      let code = await  response.json();
      console.log(code);
      if(code.code===201){
        navigate('/loginpage')
      }
      else(
        alert("user already therr")
      )
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handlelogin = async ()=>{
    navigate('/loginpage')
  }

  return (
    <div style={{ marginLeft: "600px" }}>
      <div>Register form</div>
      <div>
        <h1>User name</h1>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <h1>Password</h1>
        <input type="password" value={password} onChange={handlePasswordChange} />
        <h1>Reenter password</h1>
        <input type="password" value={reenteredPassword} onChange={handleReenteredPasswordChange} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <button onClick={handleRegister}>Submit</button>
      <button onClick={handlelogin}>Login</button>
      {/* <Link to="/loginpage">Login</Link> */}
    </div>
  );
}

export default Register;
