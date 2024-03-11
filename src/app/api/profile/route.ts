import { cookies } from "next/headers"

export async function GET() {

  if (cookies().has('token')) {
    const data = await fetch('https://api.origamid.online/conta/perfil', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + cookies().get('token')?.value
      },
    }).then(response => {
      if (!response.ok) {
        // throw new Error('Erro')
        return { erro: 'Erro' }
      }
      return response.json()
    })
    return Response.json(data)
  }

  return Response.json({ erro: 'Sem token' })
}