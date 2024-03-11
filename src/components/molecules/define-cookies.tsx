'use client'

import { setCookie } from '@/actions/set-cookie'

export function DefineCookies() {
  function handleClick() {
    setCookie('segredo', '123456')
  }

  return (
    <div>
      <h1>Define Cookies</h1>

      <button onClick={handleClick} type="button">Definir Cookie</button>
    </div>
  )
}
