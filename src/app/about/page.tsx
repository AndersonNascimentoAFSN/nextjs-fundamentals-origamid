import { Metadata } from "next";
import dynamic from "next/dynamic";

const DynamicWidthScreen = dynamic(() =>
  import("@/components/molecules/WidthScreen"), {
  ssr: false,
  loading: () => <p>Carregando...</p>,
});

export const metadata: Metadata = {
  title: "Sobre",
  description: "Página sobre o projeto",
};

export default function AboutPage() {
  return (
    <div>
      <h2>Sobre</h2>

      <DynamicWidthScreen />

      <h2 id="empresa" className="mt-[1600px] p-10">Empresa</h2>
    </div>
  )
}
