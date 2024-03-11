import { cookies } from "next/headers"
import { NextRequest } from "next/server"

export async function GET() {
  const data = await fetch('https://api.origamid.online/conta/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'dog',
      password: 'dog'
    })
  }).then(response => {
    if (!response.ok) {
      // throw new Error('Erro ao logar')
      return { erro: 'Erro ao logar' }
    }
    return response.json()
  })

  cookies().set('token', data.token, {
    httpOnly: true,
    secure: true,
  })

  return Response.json(data)
}

export async function POST(request: NextRequest) {
  const params = request
    .nextUrl
    .searchParams
    .get('search')

    const body = await request.json();

  return Response.json({
    method: 'POST',
    params: params,
    body: body
  })
}