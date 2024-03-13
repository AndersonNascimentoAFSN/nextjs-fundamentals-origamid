"use client"

import { login } from "@/actions/login"
import { FormEvent } from "react"

export function LoginForm() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const username = event.currentTarget.username.value
    const password = event.currentTarget.password.value

    await login(username, password)
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
