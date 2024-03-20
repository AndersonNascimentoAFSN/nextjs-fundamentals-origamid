import { Suspense } from "react"

import { Products } from "../_components/products"

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
