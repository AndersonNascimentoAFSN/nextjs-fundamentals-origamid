interface IProduct {
  id: number
  nome: string
  preco: number
  descricao: string
  estoque: number
  importado: number
}

export async function ServerFetch() {
  const response = await fetch('https://api.origamid.online/produtos')
  const products: IProduct[] = await response.json()
  
  return (
    <div>
      {products.map(product => (
        <ul key={product.id}>
          <li>{product.nome}</li>
          {/* <p>{product.preco}</p> */}
        </ul>
      ))}
    </div>
  )
}
