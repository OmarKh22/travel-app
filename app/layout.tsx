import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from 'next-themes'



export const metadata: Metadata = {
  title: 'Travel app',
  description: 'Travel website for compain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <ThemeProvider enableSystem={true} >
      <html lang="en">
        <body>
          <Navbar/>
          <main className='relative overflow-hidden'>
          {children}
          </main>
          <Footer/>
        </body>
      </html>
    // {/* </ThemeProvider> */}
  )
}

// import { useTheme } from 'next-themes'

// const ThemeChanger = () => {
//   const { theme, setTheme } = useTheme()

//   return (
//     <div>
//       The current theme is: {theme}
//       <button onClick={() => setTheme('light')}>Light Mode</button>
//       <button onClick={() => setTheme('dark')}>Dark Mode</button>
//     </div>
//   )
// }
