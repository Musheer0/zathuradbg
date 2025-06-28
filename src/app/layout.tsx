import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const font = DM_Sans({
  subsets: ['latin-ext', 'latin']
})

export const metadata: Metadata = {
  title: "ZathuraDbg: Open-Source GUI Debugger for Assembly | Learn Assembly with Ease",
  description:
    "ZathuraDbg is an open-source GUI debugger for assembly. Learn assembly with a clean UI designed for simplicity and support for x86_64 architecture.",
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    title: "ZathuraDbg: Open-Source GUI Debugger for Assembly | Learn Assembly with Ease",
    description:
      "ZathuraDbg is an open-source GUI debugger for assembly. The primary goal of ZathuraDbg is to make the process of learning assembly easier with a clean UI.",
    url: "https://zathuradbg.github.io/",
    siteName: "ZathuraDbg",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/e7af3a22-d1ab-44a8-b3f5-d39ba1678c94.jpg?token=Vowc1wH2EMjMT12uttRA6csMQtABSVWwdyL9DTZQe9w&height=400&width=1200&expires=33268253724",
        width: 1200,
        height: 400,
        alt: "ZathuraDbg Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZathuraDbg: Open-Source GUI Debugger for Assembly | Learn Assembly with Ease",
    description:
      "ZathuraDbg is an open-source GUI debugger for assembly. Learn assembly with a clean UI designed for simplicity and support for x86_64 architecture.",
    images: [
      "https://opengraph.b-cdn.net/production/images/e7af3a22-d1ab-44a8-b3f5-d39ba1678c94.jpg?token=Vowc1wH2EMjMT12uttRA6csMQtABSVWwdyL9DTZQe9w&height=400&width=1200&expires=33268253724",
    ],
    site: "@ZathuraDbg",
  },
  robots: {
    index: true,
    follow: true,
  },
  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
<link rel="preload" as="image" href="/logo.webp" type="image/webp" />
      <meta  name="viewport " content="width=device-width, initial-scale-1.0"/>
      <body
      suppressHydrationWarning
        className={`${font.className}  mx-auto overflow-x-hidden bg-black text-white w-full h-full min-h-screen antialiased`}
      >
        <Analytics/>
     
        {children}
      
      </body>
    </html>
  );
}
