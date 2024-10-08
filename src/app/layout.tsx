import type { Metadata } from "next";
import "./globals.css";
import { NavLinks } from "./ui/nav-links";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavLinks />
        <div className="p-4 sm:ml-64">{children}</div>
      </body>
    </html>
  );
}
