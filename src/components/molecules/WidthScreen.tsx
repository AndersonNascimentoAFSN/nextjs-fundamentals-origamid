'use client'

import { useState } from "react"
import { tv } from 'tailwind-variants';

import { useWidth } from "@/hooks"

export const title = tv({
  base: 'font-semibold text-white text-sm py-1 px-4 rounded-full',
  variants: {
    active: {
      true: 'text-green-500 bg-green-700 hover:bg-green-900',
      false: 'bg-red-500 hover:bg-red-700',
    }
  }
});

export default function WidthScreen() {
  const [active, setActive] = useState(false)
  const { width } = useWidth()

  return (
    <div>
      <h2 className={title({ active: active })}>Largura da tela: {width}</h2>
      <button
        type="button"
        onClick={() => setActive(state => !state)}
        className="text-white bg-blue-500 hover:bg-blue-700 py-1 px-4 rounded-full active:opacity-80"
      >
        Ativar
      </button>
    </div >
  )
}
