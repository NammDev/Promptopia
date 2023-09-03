import 'styles/globals.css'

import Nav from '@/components/Nav'
import AuthProvider from './context/AuthProvider'
import Link from 'next/link'

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Propmpts',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <AuthProvider>
          <div className='main'>
            <div className='gradient'></div>
          </div>
          <div className='app'>
            <Nav />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
