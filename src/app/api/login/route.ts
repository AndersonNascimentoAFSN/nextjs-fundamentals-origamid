import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function POST(request: NextRequest) {
  const { username, password } = await request.json() as { username: string, password: string }

  const result = await fetch('https://api.origamid.online/conta/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })

  if (!result.ok) {
    if (result.status === 404) {
      return Response.json({ message: 'usuário ou senha incorreta', authorized: false }, { status: 404 })
    } else {
      return Response.json({ message: 'erro inesperado', authorized: false }, { status: 500 })
    }
  }

  const data = await result.json()

  if (data.token) {
    cookies().set('token', data.token, {
      httpOnly: true,
      secure: true,
    })
    redirect('/profile')
  }
  
  return Response.json({
    authorized: true
  })
}