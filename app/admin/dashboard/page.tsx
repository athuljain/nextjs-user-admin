"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users").then(async (res) => {
      if (res.ok) setUsers(await res.json());
      else alert("Unauthorized 🚫");
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>
      <h4>Users List:</h4>
      {users.map((u:any) => (
        <p key={u._id}>{u.name} - {u.email}</p>
      ))}
    </div>
  );
}
