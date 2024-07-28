import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utlis";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AskPdf",
  description: "Ask questions to your pdf and get answers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={cn(
        'min-h-screen font-sans antialiased grainy',
        inter.className
      )}>{children}</body>
    </html>
  );
}
