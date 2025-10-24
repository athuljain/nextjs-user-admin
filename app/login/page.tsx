"use client"

import { useState } from "react"

export default function Login(){

    const [form,setForm]=useState({email:"",password:""})
    return(
        <form >
            <h2>Login</h2>
     
                <input type="email" placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})} required /> <br />
                <input type="password" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})} required /> <br />

                <button>Login</button>
        </form>
    )
}