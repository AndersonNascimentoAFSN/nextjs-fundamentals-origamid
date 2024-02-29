import type { Metadata } from "next";
import "./globals.css";

import { Menu } from "@/components";

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
        {children}
      </body>
    </html>
  );
}
