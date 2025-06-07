"use client"

import Home from './home/page'
import Landing from './landing/page'

const page = () => {

  const isLoggedin = localStorage.getItem("token")

  return (
    <>
      { isLoggedin ? <Home/> : <Landing/> }
    </>
  )
}

export default page
