'use client'

import { useEffect, useState } from "react"

interface IProduct {
  id: number
  nome: string
  preco: number
  descricao: string
  estoque: number
  importado: number
}

export function ClientFetch() {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    fetch('https://api.origamid.online/produtos')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  
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
