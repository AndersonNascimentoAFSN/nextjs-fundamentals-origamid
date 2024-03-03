'use client'

import { FormEvent, useState } from "react"

export function FormIMC() {
  const [imc, setImc] = useState(0)

  function handleCalcImc(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const heightInput = event.currentTarget.elements.namedItem('height') as HTMLInputElement;
    const weightInput = event.currentTarget.elements.namedItem('weight') as HTMLInputElement;
    if (heightInput && weightInput) {
      const height = Number(heightInput.value) / 100
      const total = (Number(weightInput.value) / (height * height)).toFixed(2)
      setImc(Number(total))
    }
  }

  return (
    <form onSubmit={handleCalcImc} className="m-0">
      <div className="flex gap-2">
        <label htmlFor="weight">Peso</label>
        <input id="weight" type="number" placeholder="Peso" name="weight" />
      </div>

      <div>
        <label htmlFor="height">Altura</label>
        <input id="height" type="number" placeholder="Altura" name="height" />
      </div>

      <button type="submit">Calcular</button>

      <p>IMC: {imc}</p>
    </form>
  )
}
