'use client'

import { useState } from "react"
import { getCookie } from "@/actions/get-cookies"

export function ShowCookie() {
  const [token, setToken] = useState('')

  async function handleCookie() {
    const token = await getCookie('token')
    setToken(token?.value || '')
  }
  return (
    <div>
      <h1>ShowCookie</h1>

      <button onClick={handleCookie}>Pegar cookie</button>
      <p>Cookie: {token}</p>
    </div>
  )
}
