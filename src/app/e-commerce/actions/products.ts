'use server'

import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export async function createProductServerAction({ name, price, description, stock, imported }: {
  name: string
  price: number
  description: string
  stock: number
  imported: 0 | 1

}) {
  // const name = payload.get('name')
  // const price = payload.get('preco')
  // const description = payload.get('descricao')
  // const stock = payload.get('estoque')
  // const imported = payload.get('importado')

  const response = await fetch('https://api.origamid.online/produtos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nome: name,
      preco: price,
      descricao: description,
      estoque: stock,
      importado: imported
    })
  })

  
  await response.json()
  
  revalidateTag('products')
  redirect('/e-commerce/products')
  // revalidatePath('/e-commerce/products')
}