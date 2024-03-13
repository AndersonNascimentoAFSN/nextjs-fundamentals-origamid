'use server'

import { redirect } from 'next/navigation'
import { cookies } from "next/headers"

export async function login(username: string, password: string) {
  const response = await fetch('https://api.origamid.online/conta/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })


  const data = await response.json()

  cookies().set('token', data.token, {
    httpOnly: true,
    secure: true,
  })

  // if (response.ok && response.redirected) {
  //   cookies().set('token', data.token, {
  //     httpOnly: true,
  //     secure: true,
  //   })

  //   redirect(response.url)
  // }
} 