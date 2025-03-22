import './globals.css'
import ClientLayout from '@/components/ClientLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mava | Portfolio',
  description: 'Personal portfolio built with Next.js and Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
