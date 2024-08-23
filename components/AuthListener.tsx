"use client"

import React, { useEffect } from "react"
import { redirect } from "next/navigation"
import Cookies from "js-cookie"

const AuthListener = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const token = Cookies.get("token")
    if (!token) {
      redirect("/login")
    }
  }, [])

  return <>{children}</>
}

export default AuthListener