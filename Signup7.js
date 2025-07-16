import React,{useState} from 'react'
import axios from "axios"

export default function Signup7() {
    const [username,setUsername]=useState('')
    const handleSignup = async(e)=> {
        e.preventDefault()
        try{
            await axios.post("http://localhost:5000/Signup7",{username});
            alert("user signed up successfully"+username);
            setUsername('');
        }
        catch(error){
            console.error("signup error:"+error)
            alert("An error occured")
        }
    }
  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={handleSignup} method="post">
            <input type='text' name={username} onChange={(e)=>setUsername(e.target.value)}></input>
            <button type='submit'>Signup</button>
        </form>
    </div>
  )
}
