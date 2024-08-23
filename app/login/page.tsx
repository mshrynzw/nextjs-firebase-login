"use client"

import React, { useState } from "react"
import Cookies from "js-cookie"
import { formAction } from "@/actions/formAction"

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("")

  const handleError = (error : string) => {
    setErrorMessage(error)
  }

  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    try {
      const { token } = await formAction(formData)
      Cookies.set("token", token, { expires : 7 })
      window.location.href = "/"
    } catch (error) {
      handleError(error.message)
    }
  }

  return (
    <div>
      <h1>ログイン</h1>
      {errorMessage && <p style={{ color : "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="パスワード"
          required
        />
        <button type="submit">ログイン</button>
      </form>
    </div>
  )
}

export default LoginPage