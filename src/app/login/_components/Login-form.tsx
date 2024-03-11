"use client"

import { useRouter } from "next/navigation"
import { FormEvent } from "react"

export function LoginForm() {
  const route = useRouter()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // const usernameInput = event.currentTarget.elements.namedItem('username') as HTMLInputElement;
    // const passwordInput = event.currentTarget.elements.namedItem('password') as HTMLInputElement;
    // const username = usernameInput.value
    // const password = passwordInput.value;

    const username = event.currentTarget.username.value
    const password = event.currentTarget.password.value

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })


    if (response.redirected && response.ok) {
      route.push(response.url)
    }
  }

  return (
    <form onSubmit={handleSubmit} method="post" className="flex flex-col w-[450px] gap-2 m-auto border-slate-800 border-2 p-4">
      <div className="flex flex-col w-full">
        <label htmlFor="username">Nome</label>
        <input type="text" name="username" id="username" placeholder="nome de usuário" />
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" placeholder="Senha" />
      </div>


      <button type="submit" className="bg-blue-900 text-white">Entrar</button>
    </form>
  )
}
