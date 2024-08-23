"use server"

import { auth } from "@/lib/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

export const formAction = async (formData : FormData) => {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    const token = await user.getIdToken()
    return { token }

  } catch (error) {
    console.error("Login error:", error)
  }
}