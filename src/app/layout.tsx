import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Remind Me',
  description: 'Notes and reminders for your future self.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <div className='flex min-h-screen w-full flex-col items-center dark:bg-black'>
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
