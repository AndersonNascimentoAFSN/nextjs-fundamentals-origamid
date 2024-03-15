'use server'

import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

function validateName(name: unknown) {
  return typeof name === 'string' && name.length > 1
}

function validatePrice(price: unknown) {
  return typeof price === 'number' && price > 1
}

type Errors = {
  field: string
  messages: string[]
}

export async function createProductServerActionFormAction(state: { errors: Errors[] }, payload: FormData) {
  const name = payload.get('productName')
  const price = payload.get('price')
  const description = payload.get('description')
  const stock = payload.get('stock')
  const imported = payload.get('imported')


  state.errors = [{ field: '', messages: [] }]

  if (!validateName(name)) {
    state.errors.push({ field: 'productName', messages: ['Nome inválido'] })
  }

  if (!validatePrice(price)) {
    state.errors.push({ field: 'price', messages: ['Preço inválido'] })
  }

  if (state.errors.length > 0) {
    return { errors: state.errors }
  }

  try {
    const response = await fetch('https://api.origamid.online/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: name,
        preco: Number(price),
        descricao: description,
        estoque: Number(stock),
        importado: imported ? 1 : 0
      })
    })
    if (!response.ok) throw new Error('Erro ao adicionar produto')
    await response.json()
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { errors: [{ field: 'error', messages: [error.message] }] }
    }
  }

  revalidateTag('products')
  redirect('/e-commerce/products')
  // return { errors: state.errors }
  // revalidatePath('/e-commerce/products')
}