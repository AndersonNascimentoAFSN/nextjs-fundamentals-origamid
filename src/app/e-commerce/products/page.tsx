import { IProduct } from "../types/products"


export default async function ProductsPage() {
  const products: IProduct[] = await fetch('https://api.origamid.online/produtos', {
    next: {
      revalidate: 5,
      tags: ['products']
    }
  })
    .then((response) => response.json())

  return (
    <div>
      <h1 className="text-3xl text-gray-800">Produtos</h1>

      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <p>{product.nome}: R$ {product.preco}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
