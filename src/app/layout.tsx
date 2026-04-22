import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple Counter",
  description: "A simple counter app built with Next.js",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
