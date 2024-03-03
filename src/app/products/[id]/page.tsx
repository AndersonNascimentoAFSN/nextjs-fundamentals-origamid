import { IProduct } from "@/types"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const id = params?.id

  const response = await fetch(`https://api.origamid.online/produtos/${id}`)
  const product: IProduct = await response.json()

  return (
    <div>
      <ul key={product.id}>
        <li>{product.nome}</li>
      </ul>
    </div>
  )
}
