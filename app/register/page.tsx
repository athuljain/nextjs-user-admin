"use client"

import { useState } from "react"

export default function Register(){
    const [form,setForm]=useState({name:"",email:"",password:""})
    console.log("register from :",form);
    
    return(
        
        <form >
            <h2>Register</h2>
            <input type="text" placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})} required /> <br />
                <input type="email" placeholder="Email"  onChange={(e)=>setForm({...form,email:e.target.value})} required /> <br />
                <input type="password" placeholder="Password"  onChange={(e)=>setForm({...form,password:e.target.value})} required /> <br />

                <button>Register</button>
        </form>
    )
}