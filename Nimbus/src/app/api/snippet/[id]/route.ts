import { NextRequest, NextResponse } from "next/server";
import { DataBaseConnection } from "@/lib/DB";
import Snippet from "@/models/Snippet";
import { getUserFromToken } from "@/lib/auth";



// DELETE /api/snippet/:id



export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {

  try {

    await DataBaseConnection();

    const { id } = await params;
    const user = await getUserFromToken();

    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const snippet = await Snippet.findById(id);

    if (!snippet) {
      return NextResponse.json({ message: "Snippet not found" }, { status: 404 });
    }

    if (snippet.author.toString() !== user._id.toString()) {
      return NextResponse.json({ message: "Forbidden: Not the author" }, { status: 403 });
    }

    await Snippet.findByIdAndDelete(id);
    return NextResponse.json({ message: "Snippet deleted successfully" });

  } catch (error) {

    console.error("Delete Error:", error);
    return NextResponse.json({ message: "Server error", error }, { status: 500 });
    
  }
}



// PATCH /api/snippet/:id



export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> } ) {

  try {

    await DataBaseConnection();

    const { id } = await params;
    const updates = await req.json();
    const user = await getUserFromToken();

    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const snippet = await Snippet.findById(id);

    if (!snippet) {
      return NextResponse.json({ message: "Snippet not found" }, { status: 404 });
    }

    if (snippet.author.toString() !== user._id.toString()) {
      return NextResponse.json({ message: "Forbidden: Not the author" }, { status: 403 });
    }

    Object.assign(snippet, updates);
    await snippet.save();

    return NextResponse.json({ message: "Snippet updated", snippet });

  } catch (error) {

    console.error("Update Error:", error);
    return NextResponse.json({ message: "Server error", error }, { status: 500 });

  }

}
