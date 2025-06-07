"use client"

import Gradients from "@/components/Gradients"
import axios from "axios"
import Link from "next/link"
import { useState } from "react"

const Login = () => {

  const [ loading, setLoading ] = useState(false)
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const submithandler = async(e: React.FormEvent) =>{
    
    e.preventDefault()
    setLoading(true)

    try {

      const res = await axios.post("/api/auth/login", {email,password} )

      if (res.status === 200) {
        window.location.href = "/"
      }

    } catch (err: unknown) {

      console.error(err)
      
      if (err instanceof Error) {
          console.error(err.message);
          alert(err.message)
      }
        
    } finally {
      setLoading(false)
    }
    
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex justify-center items-center">

      {loading && (
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
        <span className="text-[#00FF9C] text-xl font-semibold animate-pulse">Registering...</span>
      </div>
      )}

      <Gradients />

      <div className="bg-[#00ff9d41] border border-white/10 rounded-2xl backdrop-blur-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-5 m-5 w-full max-w-100 z-10">
        
        <h1 className="text-2xl font-semibold mb-6 text-center">Welcome Back </h1>

        <form className="space-y-4" onSubmit={submithandler}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input type="email" onChange={(e) => (setEmail(e.target.value))} id="email" className="w-full px-4 py-2 rounded-lg bg-black/30 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#00FF9C]" />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input type="password" onChange={(e) => (setPassword(e.target.value))} id="password" className="w-full px-4 py-2 rounded-lg bg-black/30 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#00FF9C]" />
          </div>
          <div className="flex justify-between">
            <button type="submit" className="w-full mr-4 py-2 px-4 bg-[#00FF9C] text-black font-semibold rounded-lg hover:bg-[#00e68a] transition duration-200 cursor-pointer">Login</button>
            <Link href={"/register"} className="py-2 w-full text-center border-2 border-[#00FF9C] text-white rounded-lg transition duration-200 cursor-pointer">Register</Link>
          </div>
        </form>

      </div> 

    </div>
  )
}

export default Login