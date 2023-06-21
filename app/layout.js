import './globals.css'
import Link from 'next/link'
import Header from './Header'

export const metadata = {
  title: 'Jewelry By Jared',
  description: 'Handmade silver pendants and rings',
}

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta property="og:url" content="https://next-jewelry.vercel.app/" />
        <meta property="og:title" content="Jewelry & Gems" />
        <meta property="og:description" content="Silver jewelry and gemstone e-commerce website" />
        <meta property="og:image" content="https://next-jewelry.vercel.app/jewelry-cover.png" />
        <meta property="url" content="https://next-jewelry.vercel.app/" />
        <meta property="title" content="Jewelry & Gems" />
        <meta property="description" content="Silver jewelry and gemstone e-commerce website" />
        <meta property="image" content="https://next-jewelry.vercel.app/jewelry-cover.png" />
        <link type="image/x-icon" rel="shortcut icon" href="favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={'min-h-screen flex flex-col relative ' + inter.className}>
        <Header />
        <div className='flex-1'>
          {children}
        </div>
        <footer className='flex items-center flex-wrap justify-center border-t border-solid border-slate-900 p-4 md:p-8 gap-4'>
          <Link href={'https://have-mycard.vercel.app/api/3dhrOh3i'} target='_blank'>
            <i className="fa-solid fa-envelope text-slate-900 hover:text-slate-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl"></i>
          </Link>
          <Link href={'https://hooker-hill-studios.vercel.app'} target='_blank'>
            <i className="fa-solid fa-house text-slate-900 hover:text-slate-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl"></i>
          </Link>
          
        </footer>
        <div id='portal'></div>
      </body>
    </html>
  )
}
