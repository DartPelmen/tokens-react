import { useState } from 'react';
import './App.css'
import List from './components/List';
import networkPlaceholder from "./networkPlaceholer";

function App() {
//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
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  
  function handleClick(){
    let data = new FormData();
    data.append("username",user);
    data.append("password",password);
    
    fetch("http://localhost:8080/login",
    { mode:'no-cors',
    method:'post',
    headers: {'Content-Type':'application/json'},
    body:data
  }).then(()=>{
    fetch("http://localhost:8080/generateToken",  { mode:'no-cors',
    method:'post',
    headers: {'Content-Type':'application/json'}  }).then(r=>console.log(r))
  .catch(e=>console.error(e))
  }).catch(e=>console.error(e))
  }
  return (
    <div className="App">
        <input type='text' value={user} onChange={e=>setUser(e.target.value)} placeholder='login'/>
        <input type='text' value={password} onChange={e=>setPassword(e.target.value)}  placeholder='password'/>
        <input type='button' onClick ={e=>handleClick()} value='sign in'/>
    </div>
  );
}

export default App;
