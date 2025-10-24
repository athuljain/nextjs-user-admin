"use client"

import { useState } from "react"

export default function AdminLogin(){
    const [form,setForm]=useState({username:"",password:""})
    return(
        <form >
            <h2>Register</h2>
            <input type="text" placeholder="User-Name" onChange={(e)=>setForm({...form,username:e.target.value})} required /> <br />
               
                <input type="password" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})}  /> <br />

                <button>Login</button>
        </form>
    )
}