import Notification from '@/components/Notification'
import Navbar from '@/components/Navbar'
//import Footer from '@/components/Footer'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zip Local Dish',
  description: 'From Local Chefs To Your Doorstep FAST!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Notification/>
        <Navbar/>
        {children}
        
        </body>
    </html>
  );
}
