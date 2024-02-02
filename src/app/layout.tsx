import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | "The Next App"',
    default: 'The Next App'
  },
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL('https://nextjs-app-five-zeta.vercel.app/')
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
