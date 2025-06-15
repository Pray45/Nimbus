import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nimbus – Online IDE & Snippet Sharing",
  description: "Code, share, and explore effortlessly on Nimbus – your all-in-one coding playground.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
