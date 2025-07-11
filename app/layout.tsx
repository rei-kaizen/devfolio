import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Denie Rose Bon - System Developer & Tech Enthusiast",
  description:
    "Computer Engineering student specializing in system development, IoT, and full-stack development. Building systems that solve real problems through scalable and efficient code.",
  keywords: "system developer, computer engineering, IoT, full-stack development, automation, tech enthusiast",
  authors: [{ name: "Denie Rose Bon" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
