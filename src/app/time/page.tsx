import { Update } from "./_components"

type Time = {
  nome: string
  preco: number
  atualizada: string
}

export default async function TimePage() {
  const time: Time = await fetch('https://api.origamid.online/acoes/lua', {
    // cache: 'no-store'
    next: {
      revalidate: 5,
      tags: ['time']
    }
  })
    .then((res) => res.json())

  return (
    <main className="container p-6">
      <h1>Time</h1>
      <h2>Nome: {time?.nome}</h2>
      <p>Preço: {time.preco}</p>
      <p>Atualizada: {time.atualizada}</p>

      <Update />
    </main>
  )
}