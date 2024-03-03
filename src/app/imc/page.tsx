import { Metadata } from "next";

import { FormIMC } from "@/components";

export const metadata: Metadata = {
  title: "IMC",
  description: "Página calculo IMC",
};

export default function ImcPage() {
  return (
    <div>
      <h1>Calcular IMC</h1>

      <FormIMC />
    </div>
  )
}
