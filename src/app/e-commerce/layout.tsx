import type { Metadata } from "next";
import { Menu } from "./_components/menu";
// import "../global.css";

export const metadata: Metadata = {
  title: {
    default: 'Dogs',
    template: '%s | Dogs',
  },
  description: "Criado por Anderson Nascimento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu />
        <main className="container m-4">
          {children}
        </main>
      </body>
    </html>
  );
}
