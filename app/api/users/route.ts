import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db"; 
import User from "@/app/models/User";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
  await connectDB();

  const token = req.headers.get("cookie")?.split("adminToken=")[1];
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  jwt.verify(token, process.env.JWT_SECRET!);

  const users = await User.find();
  return NextResponse.json(users);
}
