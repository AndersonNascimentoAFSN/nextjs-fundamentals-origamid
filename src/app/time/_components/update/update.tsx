'use client'

import { revalidatePathAction, revalidateTagAction } from "@/actions/revalidate-path"

export function Update() {
  function handleUpdate() {
    // revalidatePathAction('/time')
    revalidateTagAction('time')
  }

  return (
    <>
      <button
        type="button"
        className="p-3 bg-cyan-500 text-white rounded-lg"
        onClick={handleUpdate}
      >
        Atualizar
      </button>
    </>
  )
}