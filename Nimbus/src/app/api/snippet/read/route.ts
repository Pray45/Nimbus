import { NextResponse } from "next/server";
import Snippet from "@/models/Snippet";
import { DataBaseConnection } from "@/lib/DB";

export async function GET() {

    try {

        await DataBaseConnection()
        
        const snippets = await Snippet.find().populate("author", "name email")

        return NextResponse.json({message: "successfully fetched snippets" , snippets} , {status: 200})

    } catch (error) {

        console.log(error);
        return NextResponse.json({message: "failed in fetching data"} , {status: 400})
        
    }
   
}