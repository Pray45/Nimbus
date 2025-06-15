import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function getUserFromToken() {

  try {
    
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) return null;

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return decoded as jwt.JwtPayload & { _id: string };

  } catch {

    return null;

  }
}
