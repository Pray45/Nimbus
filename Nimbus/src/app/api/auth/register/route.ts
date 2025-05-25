import { NextRequest, NextResponse } from "next/server";
import { DataBaseConnection } from "@/lib/DB";
import User from "@/models/User";

export async function POST(req: NextRequest) {
    try {
        
        const { name, email, password } = await req.json()

        if( !name || !email || !password ) return NextResponse.json({message: "Please Enter feilds properly"} , { status: 400 })
        
        await DataBaseConnection();

        const isExisting = await User.findOne({email})

        if(isExisting) return NextResponse.json({message: "User already exists"} , { status: 400 })

        await User.create({
            name,
            email,
            password
        })

        return NextResponse.json({message: "User registered successfully..!!!"}, { status: 200 })


    } catch (error) {
        console.error("Register error:", error);
        return NextResponse.json({message: "error in registering user", error} , {status : 400})

    }
}