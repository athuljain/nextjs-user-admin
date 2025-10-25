"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login(){

    const [form,setForm]=useState({email:"",password:""})
    const router=useRouter()

    const handleSubmit=async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const res=await fetch("/api/login",{
            method:"POST",
            body:JSON.stringify(form)
        })
        if(res.ok) router.push('/')
            else alert ("Login failed") 
    }




    return(
        <form onSubmit={handleSubmit} style={{padding:20}} >
            <h2>Login</h2>
     
                <input type="email" placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})} required /> <br />
                <input type="password" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})} required /> <br />

                <button type="submit">Login</button>
        </form>
    )
}