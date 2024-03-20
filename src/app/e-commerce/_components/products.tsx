import { Link } from "@/components"
import { IProduct } from "../types/products"

export async function Products() {
  const products: IProduct[] = await fetch('https://api.origamid.online/produtos', {
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
      throw new Error('Erro ao buscar produtos')
    })

  return (
    <ul>
      {products?.map((product) => (
        <li key={product.id}>
          <p>{product.nome}: R$ {product.preco} <Link className="text-blue-900" href={`/e-commerce/products/${product.id}`}>Ver produto</Link></p>
        </li>
      ))}
    </ul>
  )
}