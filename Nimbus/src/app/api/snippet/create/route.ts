import { NextRequest, NextResponse } from "next/server";
import { DataBaseConnection } from "@/lib/DB";
import jwt from "jsonwebtoken";
import Snippet from "@/models/Snippet";

export async function POST(req:NextRequest) {
    
    try {
        
        const token = req.cookies.get("token")?.value

        if(!token) return NextResponse.json({message: "Unauthorized User..."}, {status : 400})

        const decoded = jwt.verify(token, process.env.JWT_SUPER_SECRATE!) as { id: string }
        
        const { title, language, content } = await req.json()

        if(!title || !language || !content) return NextResponse.json({message: "Enter the feildes properly"} , {status: 400})
        
        await DataBaseConnection()

        await Snippet.create({
            title,
            language,
            content,
            author : decoded.id
        })
        
        return NextResponse.json({message: "snippet created successfully..!!!"} , {status: 200})

    } catch (error) {

        console.error(error);
        return NextResponse.json({ message: "Server Error", error }, { status: 400 });
        
    }

}