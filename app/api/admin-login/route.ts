import { NextResponse } from "next/server";
import jwt  from "jsonwebtoken";

export async function POST (req:Request){
    const {username,password}=await req.json()
    if(username !== "admin" || password !=="admin123")
        return NextResponse.json({error:"unauthorized"},{status:401})

    const token=jwt.sign({role:"admin"},process.env.JWT_SECRET!,{
        expiresIn:"1d"
    })

    const res=NextResponse.json({message:"admin login success"})
    res.cookies.set("adminToken",token,{httpOnly:true,path:"/"})
    return res;
}