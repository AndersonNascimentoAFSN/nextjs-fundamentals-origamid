'use client'

import { FormEvent } from "react";
import { createProductServerAction } from "../actions/products";

export function CreateProductForm() {
  async function handleCreateProduct(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const name = event.currentTarget.productName.value
    const price = Number(event.currentTarget.price.value)
    const description = event.currentTarget.description.value
    const stock = Number(event.currentTarget.stock.value)
    const imported = event.currentTarget.imported.checked ? 1 : 0

    await createProductServerAction({ name, price, description, stock, imported })
  }

  return (
    <form
      className="grid gap-3"
      onSubmit={handleCreateProduct}
      // method="post"
    >
      <div className="grid">
        <label htmlFor="productName">Nome</label>
        <input type="text" id="productName" className="p-4 bg-slate-200" name="productName"/>
      </div>

      <div className="grid">
        <label htmlFor="price">Preço</label>
        <input type="text" id="price" className="p-4 bg-slate-200" name="price"/>
      </div>

      <div className="grid">
        <label htmlFor="description">Descrição</label>
        <input type="text" id="description" className="p-4 bg-slate-200" name="description"/>
      </div>

      <div className="grid">
        <label htmlFor="stock">Estoque</label>
        <input type="text" id="stock" className="p-4 bg-slate-200" name="stock" />
      </div>

      <div className="flex gap-2">
        <input type="checkbox" id="imported" name="imported"/>
        <label htmlFor="imported">Estoque</label>
      </div>

      <button type="submit">Adicionar produto</button>
    </form>
  )
}
