export const metadata = {
  title: 'Global Company Data',
  description: 'Access to worldwide B2B data and business information',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}
