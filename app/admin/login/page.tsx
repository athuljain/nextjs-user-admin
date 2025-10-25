"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/admin-login", {
      method: "POST",
      body: JSON.stringify(form)
    });
    if (res.ok) router.push("/admin/dashboard");
    else alert("Admin Login Failed ");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h2>Admin Login</h2>
      <input placeholder="Username" onChange={(e)=>setForm({...form,username:e.target.value})}/><br/>
      <input placeholder="Password" type="password" onChange={(e)=>setForm({...form,password:e.target.value})}/><br/>
      <button type="submit">Login</button>
    </form>
  );
}
