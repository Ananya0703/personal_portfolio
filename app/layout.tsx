import type { Metadata } from "next";
import Script from "next/script";
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
      <body>
        <Script id="force-top-on-load" strategy="beforeInteractive">
          {`
            try {
              if ("scrollRestoration" in history) {
                history.scrollRestoration = "manual";
              }
              window.scrollTo(0, 0);
              window.addEventListener("pageshow", function (event) {
                if (event.persisted) window.scrollTo(0, 0);
              });
            } catch (e) {}
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
