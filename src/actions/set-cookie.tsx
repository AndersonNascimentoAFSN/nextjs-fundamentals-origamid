'use server'

import { cookies } from "next/headers"

export async function setCookie(key: string, value: string, options?: object) {
  cookies().set(key, value, {
    httpOnly: true,
    secure: true,
    ...options,
  })
}