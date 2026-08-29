import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ananya Giliyal | Portfolio",
  description: "Personal portfolio website for Ananya Giliyal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
