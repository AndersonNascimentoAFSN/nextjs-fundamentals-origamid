'use client'

export default function ProductsError({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div>
      <h1 className="text-3xl text-gray-800">Produtos</h1>
      <p>{error.message}</p>

      <button
        type="button"
        onClick={() => reset()}
      >
        Tente novamente
      </button>
    </div>
  )
}