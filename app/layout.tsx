import type React from "react"
import type { Metadata } from "next"
import { Tajawal } from "next/font/google"
import "./globals.css"

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  display: "swap",
  variable: "--font-tajawal",
})

export const metadata: Metadata = {
  title: "صديق - النظام المتكامل",
  description: "منظومة رقمية متكاملة تجمع بين التعليم والخدمات والتجارة الإلكترونية",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} font-tajawal`}>
      <body className={`${tajawal.className} antialiased`}>{children}</body>
    </html>
  )
}
