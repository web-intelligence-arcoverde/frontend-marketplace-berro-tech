import { AuthLayout } from '@/components/Layout/AuthLayout/AuthLayout';
import React from 'react';


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthLayout>{children}</AuthLayout>;
}
