import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Akshar } from "next/font/google";
import "./globals.css";

const akshar = Akshar({ subsets: ['latin'] })

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "プロフィール",
  description: "プロフィールページです。よろしくお願いします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body className={akshar.className}>
        {children}
      </body>
    </html>
  );
}
