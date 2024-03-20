'use client'

// import { cookies } from 'next/headers'
import { Link } from "@/components/molecules"
import { useParams, useSearchParams } from 'next/navigation'
import { Suspense } from "react"


function Search() {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''

  return <div>Busca: {search}</div>
}

export function Menu() {
  const params = useParams()

  return (
    <>
      <Suspense>
        <Search />
      </Suspense>

      <ul className="flex gap-6 p-4 list-none">
        <li>
          <Link href="/e-commerce/products" prefetch={true}>Produtos</Link>
        </li>
        <li>
          <Link href="/e-commerce/products/create" prefetch={true}>Adicionar Produto</Link>
        </li>
        <li>
          Produto: {params?.id}
        </li>
        <li>
          <Link href="/e-commerce/products?search=xpt">Busca</Link>
        </li>
      </ul>
    </>
  )
}
