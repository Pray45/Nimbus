import type { Metadata } from "next";
import "./globals.css";

// SEO metadata
export const metadata: Metadata = {
  title: "Nimbus – Online IDE & Snippet Sharing",
  description: "Code, share, and explore effortlessly on Nimbus – your all-in-one coding playground.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  <link rel="icon" href="/favicon.ico" sizes="any" />
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
