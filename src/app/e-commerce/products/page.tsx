import { Suspense } from "react"
import { Metadata } from "next"

import { Products } from "../_components/products"

export const metadata: Metadata = {
  title: 'Produtos',
  description: 'Produtos',
  keywords: ['Notebook', 'SmartPhone'],
  authors: [{ name: 'Anderson Nascimento', url: 'https://andersonnascimentoafsn.com.br' }]
}

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-3xl text-gray-800">Produtos</h1>
      <p>Essa aqui é a lista de produtos:</p>

      <Suspense fallback={<p>Loading Products...</p>}>
        <Products />
      </Suspense>
    </div>
  )
}
