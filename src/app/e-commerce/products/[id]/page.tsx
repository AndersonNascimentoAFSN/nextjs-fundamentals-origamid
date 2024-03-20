import { Metadata } from "next"
import { IProduct } from "../../types/products"

export async function generateStaticParams() {
  const products: IProduct[] = await fetch(`https://api.origamid.online/produtos`, {
    // cache: 'no-store'
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
      throw new Error('Erro ao buscar produto')
    })

  return products?.map((product) => ({ id: String(product.id) }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params?.id

  const product: IProduct = await fetch(`https://api.origamid.online/produtos/${id}`, {
    // cache: 'no-store'
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
      throw new Error('Erro ao buscar produto')
    })

  return {
    title: product.nome,
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const id = params?.id

  const product: IProduct = await fetch(`https://api.origamid.online/produtos/${id}`, {
    // cache: 'no-store'
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
      throw new Error('Erro ao buscar produto')
    })

  return (
    <div>
      <p>{product.nome}: R$ {product.preco}</p>
    </div>
  )
}
