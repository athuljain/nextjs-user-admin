import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'


export async function POST(req:Request){
    await connectDB()
    const {email,password}=await req.json()
    const user=await User.findOne({email});

    if(!user || !(await bcrypt.compare(password,user.password)))
        return NextResponse.json({error:"Invalid Credentials"},{status:401})

    const token=jwt.sign({id:user._id},process.env.JWT_SECRET!,{
        expiresIn:'1d'
    })

    const res=NextResponse.json({message:"Login Success"})
    res.cookies.set("token",token,{httpOnly:true,path:'/'})
    return res;
}