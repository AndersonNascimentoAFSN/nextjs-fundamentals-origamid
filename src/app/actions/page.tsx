interface IAction {
  simbolo: string;
  atualizada: string;
}

export default async function ActionsPage() {
  const action: IAction = await fetch('https://api.origamid.online/acoes/lua', {
    next: {
      revalidate: 5,
    }
  })
    .then((res) => res.json())

  return (
    <main>
      <h1>Actions</h1>

      <p>Simbolo: {action?.simbolo}</p>
      <p>Atualizada: {action?.atualizada}</p>
    </main>
  )
}
