import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  ClerkProvider
} from '@clerk/nextjs'
import "./globals.css";
import { QueryProvider } from "@/providers/query-provider";
import { SheetProvider } from "@/providers/sheet-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finance App",
  description: "A Finance SaaS Platform with ability to track your income and expenses, categorize transactions and assign them to specific accounts, as well as how to import transactions using a CSV file, connect to your bank account using Plaid, and monetize this product using Lemon Squeezy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
        <SheetProvider/>
        {children}
        </QueryProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}
