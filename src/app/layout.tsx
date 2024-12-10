import StoreProvider from "@/components/atoms/StoreProvider";
import { Header } from "@/components/organisms/Header";
import type { Metadata } from "next";
import React, { use } from "react";

import '@/style/globals.css'

export const metadata: Metadata = {
  title: "BerroTech",
  description: "",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <StoreProvider>
      <html lang="pt-BR">
        <body
        >
          <Header />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
