import { NextRequest, NextResponse } from "next/server";
import { DataBaseConnection } from "@/lib/DB";
import Snippet from "@/models/Snippet";

export async function DELETE(_req:NextRequest, { params }: { params: { id: string } }) {
    try {

        await DataBaseConnection()

        const { id } = params

        const deleted = await Snippet.findByIdAndDelete(id);

        if(!deleted) return NextResponse.json({ message: "Snippet not found" }, { status: 400 });

        return NextResponse.json({ message: "Snippet deleted successfully" }, { status: 200 });

    } catch (error) {
        
        console.error(error);
        return NextResponse.json({ message: "Server error", error }, { status: 400 });

    }

}