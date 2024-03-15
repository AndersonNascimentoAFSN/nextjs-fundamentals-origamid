'use client'

import { createProductServerActionFormAction } from "../actions/productsFormAction";
import { useFormState, useFormStatus } from 'react-dom'

function Button() {
  const status = useFormStatus()
  return (
    <button type="submit" disabled={status.pending} className={status.pending ? 'bg-red-700 p-2 rounded-md text-white' : 'bg-gray-700 p-2 rounded-md text-white'}>
      {status.pending ? "Carregando..." : "Adicionar produto"}
    </button>
  )
}

export function CreateProductFormAction() {
  const [createProductState, createProductFormAction] = useFormState(createProductServerActionFormAction, {
    errors: [{ field: '', messages: [] }],
  })

  return (
    <form
      className="grid gap-3"
      method="POST"
      action={createProductFormAction}
    >
      <div className="grid">
        <label htmlFor="productName">Nome</label>
        <input type="text" id="productName" className="p-4 bg-slate-200" name="productName" />
        {
          createProductState.errors.filter((error) => error.field === 'productName').length > 0 && (
            <p className="text-red-800">
              {createProductState.errors.filter((error) => error.field === 'productName')
                .map((error) => error.messages).join('')}
            </p>
          )
        }
      </div>

      <div className="grid">
        <label htmlFor="price">Preço</label>
        <input type="text" id="price" className="p-4 bg-slate-200" name="price" />
        {
          createProductState.errors.filter((error) => error.field === 'price').length > 0 && (
            <p className="text-red-800">
              {createProductState.errors.filter((error) => error.field === 'price')
                .map((error) => error.messages).join('')}
            </p>
          )
        }
      </div>

      <div className="grid">
        <label htmlFor="description">Descrição</label>
        <input type="text" id="description" className="p-4 bg-slate-200" name="description" />
      </div>

      <div className="grid">
        <label htmlFor="stock">Estoque</label>
        <input type="text" id="stock" className="p-4 bg-slate-200" name="stock" />
      </div>

      <div className="flex gap-2">
        <input type="checkbox" id="imported" name="imported" />
        <label htmlFor="imported">Estoque</label>
      </div>

      {
          createProductState.errors.filter((error) => error.field === 'error').length > 0 && (
            <p className="text-red-800">
              {createProductState.errors.filter((error) => error.field === 'error')
                .map((error) => error.messages).join('')}
            </p>
          )
        }

      <Button />

      {
        // createProductState.errors.filter((field) => field.field === 'name')


        // .map((error, index) => <p className="text-red-800" key={index}>{error}</p>)
      }
    </form>
  )
}
