import { NextResponse } from "next/server";

export async function POST()  {

    const response = NextResponse.json({ message: "Logged out successfully" });

    response.cookies.set({
        name: "token",
        value: "",
        httpOnly: true,
        path: "/"
    })

  return response;

}