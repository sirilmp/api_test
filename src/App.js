
import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Application from './Application';

function App() {

const [data,setData]=useState({
  email:'',
  name:'',
  password:'',
})

const send=(e)=>{
e.preventDefault()
axios.post('Localhost:8000/api/register',data).then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
})
}

  return (
    <div className="App">
<form onSubmit={send}>
  <input type="text" name="email" id="" value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}} />
  <input type="text" name="name" id="" value={data.name} onChange={(e)=>{setData({...data,name:e.target.value})}}/>
  <input type="text" name="password" id="" value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}} />
  <button id="submit"  type="submit" value="Send!">Submit</button>
</form>
    </div>
  );
}

export default App;
