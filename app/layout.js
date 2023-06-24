import './globals.css'
import Link from 'next/link'
import Header from './Header'

export const metadata = {
  title: 'Jewelry & Gems',
  description: 'Handmade silver pendants, rings, gems, and more',
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
        <footer className='flex items-center justify-center gap-10 border-t border-solid border-slate-900 p-2'>
          <Link className="text-slate-900 text-center text-xl md:text-2xl font-medium hover:scale-90 hover:opacity-60 duration-300" href={'mailto:hookerhillstudios@gmail.com'} target='_blank'>
            <i className='fa fa-envelope'></i>
          </Link>
          <Link className="text-slate-900 text-center text-xl md:text-2xl font-medium hover:scale-90 hover:opacity-60 duration-300" href={'https://hooker-hill-studios.vercel.app'} target='_blank'>
            <i className='fa fa-home'></i>
          </Link>

        </footer>
        <div id='portal'></div>
      </body>
    </html>
  )
}
