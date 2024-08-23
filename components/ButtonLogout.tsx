"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { auth } from "@/lib/firebase"
import Cookies from "js-cookie"

const ButtonLogout = () => {
  const router = useRouter()

  const handleLogout = async () => {
    await auth.signOut()
    Cookies.remove("token")
    router.push('/login')
  }

  return (
    <button onClick={handleLogout}>ログアウト</button>
  )
}

export default ButtonLogout