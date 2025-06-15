import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  
  const token = req.cookies.get("token")?.value;

  const protectedRoutes = ["/home"];
  const guestOnlyRoutes = ["/login", "/register"];

  try {

    if (token) {

      if (guestOnlyRoutes.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(new URL("/home", req.url));
      }

    } else {

      if (protectedRoutes.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(new URL("/login", req.url));
      }

    }
  } catch (error) {

    console.log(error);
    return NextResponse.redirect(new URL("/login", req.url));

  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home", "/login", "/register"]
}