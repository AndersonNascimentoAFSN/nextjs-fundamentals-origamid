import { IProduct } from "../../types/products"

export default async function ProductPage({ params }: { params: { id: string } }) {
  const id = params?.id

  const product: IProduct = await fetch(`https://api.origamid.online/produtos/${id}`, {
    cache: 'no-store'
    // next: {
    //   revalidate: 5,
    //   tags: ['products']
    // }
  })
    .then((response) => {
      // if (!response.ok) throw new Error('Erro ao buscar produtos')
      return response.json()
    }).catch((error) => {
      console.error(error.message)
      throw new Error('Erro ao buscar produto')
    })

  return (
    <div>
      <p>{product.nome}: R$ {product.preco}</p>
    </div>
  )
}
