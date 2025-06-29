import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Website Wishlist Buku',
  description: 'Kelola koleksi buku favoritmu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}
