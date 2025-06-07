"use client"

import Home from './home/page'
import Landing from './landing/page'
import { useEffect, useState } from "react"

const Page = () => {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
  }, [])

  if (isLoggedIn === null) return <div className="absolute min-h-screen max-h-screen w-full bg-black/80 backdrop-blur-md flex items-center justify-center z-50"><span className="text-[#00FF9C] text-xl font-semibold animate-pulse">loading</span></div>

  return (
    <>
      {isLoggedIn ? <Home /> : <Landing />}
    </>
  )
}

export default Page
