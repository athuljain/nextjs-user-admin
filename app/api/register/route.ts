import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";

export async function POST(req:Request){
    await connectDB();
    const {name,email,password}=await req.json()

    const hashed=await bcrypt.hash(password,10)
    await User.create({name,email,password:hashed})

    return NextResponse.json({message:"Register successfully"})
    
}