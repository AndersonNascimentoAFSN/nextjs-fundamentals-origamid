import { cookies } from 'next/headers'
import { Link } from "@/components/molecules"

export function Menu() {
  return (
    <ul className="flex gap-6 p-4 list-none">
      <li>
        <Link href="/e-commerce/products" prefetch={true}>Produtos</Link>
      </li>
      <li>
        <Link href="/e-commerce/products/create" prefetch={true}>Adicionar Produto</Link>
      </li>
    </ul>
  )
}
