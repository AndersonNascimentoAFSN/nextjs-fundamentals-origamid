import { IProduct } from "../types/products"

export async function Products() {
  const products: IProduct[] = await fetch('https://api.origamid.online/produtos', {
    next: {
      revalidate: 5,
      tags: ['products']
    }
  })
    .then((response) => {
      // if (!response.ok) throw new Error('Erro ao buscar produtos')
      return response.json()
    }).catch((error) => {
      console.error(error.message)
      throw new Error('Erro ao buscar produtos')
    })

  return (
    <ul>
      {products?.map((product) => (
        <li key={product.id}>
          <p>{product.nome}: R$ {product.preco}</p>
        </li>
      ))}
    </ul>
  )
}