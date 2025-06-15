import React from 'react'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const Home = async() => {

  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value
  

  if (!token) {
    redirect('/login')
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SUPER_SECRATE!) as {
      id: string
      email: string
      name: string
    }

    const userName = decoded.name

    
    return (

      <div className="min-h-screen flex items-center justify-center bg-black text-white text-2xl">
        👋 Hello, <span className="text-[#00FF9C] font-bold ml-2">{userName}</span>
      </div>

    )

  } catch (error) {

    console.error("JWT verification failed:", error)
    redirect('/login')
    
  }
}

export default Home
