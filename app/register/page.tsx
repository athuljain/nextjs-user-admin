"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function Register(){
    const router=useRouter()
    const [form,setForm]=useState({name:"",email:"",password:""})
    console.log("register from :",form);
    
    const handleSubmit=async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        await fetch("/api/register",{
            method:"POST",
            body:JSON.stringify(form)
        })
        alert("register success")
        router.push('/login')
    }

    return(
        
        <form onSubmit={handleSubmit} >
            <h2>Register</h2>
            <input type="text" placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})} required /> <br />
                <input type="email" placeholder="Email"  onChange={(e)=>setForm({...form,email:e.target.value})} required /> <br />
                <input type="password" placeholder="Password"  onChange={(e)=>setForm({...form,password:e.target.value})} required /> <br />

                <button type="submit">Register</button>
        </form>
    )
}