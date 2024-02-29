import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Página sobre o projeto",
};

export default function AboutPage() {
  return (
    <div>
      <h2>Sobre</h2>

      <h2 id="empresa" className="mt-[1600px] p-10">Empresa</h2>
    </div>
  )
}
