import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Background from "./_components/background";
import Header from "./_components/header";

export const metadata: Metadata = {
  title: `Studies of Change`,
  description: `Studies of Change will be an exhibition by 26 artists from the Hochschule für Künste Bremen that links art with technological, social, ecological, and political realms.
  From 29th May to 2nd June 2024 it will open the doors of Bremen’s Alte Pathologie to offer new ways of looking at the former municipal site.`,
};

const base: string = "/studiesofchange-web";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={base + "favicon/apple-touch-icon.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={base + "/favicon/favicon-32x32.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={base + "/favicon/favicon-16x16.png"}
        />
        <link rel="manifest" href={base + "/favicon/site.webmanifest"} />
        <link rel="shortcut icon" href={base + "/favicon/favicon.ico"} />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content={base + "favicon/browserconfig.xml"}
        />
        <meta name="theme-color" content="#000" />
      </head>
      <body className="font-sans">
        <Header />
        <Background />
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
