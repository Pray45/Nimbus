import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import User from "@/models/User";
import { DataBaseConnection } from "@/lib/DB";

export async function POST( req: NextRequest ) {
    
    const { email, password } = await req.json()

    if( !email || !password) return NextResponse.json({ message: "Enter the fields properly "} , { status: 400})

    await DataBaseConnection()

    const user = await User.findOne({email})

    if(!user) return NextResponse.json({message: "email not found.."} , {status: 400})

    const isMatch = await user.comparePassword(password)

    if(!isMatch) return NextResponse.json({message : "the password is incorrect..."} , { status: 400 })
        
    const token = jwt.sign(
        {
            id : user._id, 
            email: user.email,
            name: user.name
        },
        process.env.JWT_SUPER_SECRATE!,
        {
            expiresIn: "7d"
        }
    )

    const response = NextResponse.json({ message: "Login successfully ..!!" , token} , { status: 200 })

    response.cookies.set("token" , token)

    return response
    
}