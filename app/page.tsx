import React from "react"
import AuthListener from "@/components/AuthListener"
import ButtonLogout from "@/components/ButtonLogout"

const HomePage = async () => {

  return (
    <AuthListener>
      <div>
        <h1>ホームページ</h1>
        <div>
          <p>ようこそ</p>
          <ButtonLogout/>
        </div>
      </div>
    </AuthListener>
  )
}

export default HomePage