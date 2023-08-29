import 'styles/globals.css'

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Propmpts',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient'></div>
        </div>
        <div className='app'>{children}</div>
      </body>
    </html>
  )
}
