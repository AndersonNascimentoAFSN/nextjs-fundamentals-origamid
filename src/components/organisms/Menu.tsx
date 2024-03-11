import { cookies } from 'next/headers'
import { Link } from "../molecules"

export async function Menu() {
  const token = cookies().get('token')?.value

  const response = await fetch('https://api.origamid.online/conta/perfil', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })

  const data: { autorizado: boolean, usuario: string } | undefined  = await response.json()

  console.log(data)


  return (
    <ul className="flex gap-6 p-0 list-none">
      <li>
        <Link href="/" prefetch={true}>Home</Link>
      </li>
      <li>
        <Link href="/about" prefetch={true}>Sobre</Link>
      </li>
      <li>
        <Link href="/about#empresa" prefetch={true} scroll={true}>Empresa</Link>
      </li>
      <li>
        <Link href="/contact" prefetch={true}>Contato</Link>
      </li>
      <li>
        <Link href="/access" prefetch={true}>Acessos</Link>
      </li>
      <li>
        {
          data?.autorizado ? (
            <Link href="/profile" prefetch={true}>{data.usuario}</Link>
          ) : (
            <Link href="/login" prefetch={true}>Login</Link>
          )
        }
      </li>
    </ul>
  )
}
