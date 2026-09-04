import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RecoverIQ — AI Revenue Recovery",
  description: "Turn failed payments into recovered revenue with explainable AI decisions and deterministic financial guardrails.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
