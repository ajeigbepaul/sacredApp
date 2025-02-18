import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import Providers from "./provider";
const secondaryFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: false,
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const sfProM = localFont({
  src: "./fonts/SF-Pro-Display-Medium.woff",
  variable: "--font-sfprom",
  weight: "500",
});

const sfProB = localFont({
  src: "./fonts/SF-Pro-Display-Bold.woff",
  variable: "--font-sfprob",
  weight: "700",
});

export const metadata: Metadata = {
  title: "SacredEye",
  description: "Preventing unwanted site",
  //
  generator: "Next.js",
  category: "website",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  // themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  // authors: [
  //   {
  //     name: "",
  //     url: "",
  //   },
  // ],
  // viewport:
  // "minimum-scale=0, initial-scale=0, width=device-width, shrink-to-fit=yes, viewport-fit=cover",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options);
  return (
    <html lang="en">
      <Providers session={session}>
        
        <body
          className={`${secondaryFont.variable} ${geistSans.variable} ${geistMono.variable} ${sfProM.variable} ${sfProB.variable} antialiased`}
        >
          {children}
        </body>
      </Providers>
      {/* <ScrollToTopButton /> */}
    </html>
  );
}
