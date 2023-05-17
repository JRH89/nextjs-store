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
        <meta property="og:title" content="Jewelry Store" />
        <meta property="og:description" content="E-commerce app made with NextJS 13, TailwindCSS, Stripe, and Zustand" />
        <meta property="og:image" content="https://github.com/JRH89/nextjs-store/blob/main/public/jewelry-cover.png" />
        <meta property="url" content="https://next-jewelry.vercel.app/" />
        <meta property="title" content="Jewelry Store" />
        <meta property="description" content="E-commerce app made with NextJS 13, TailwindCSS, Stripe, and Zustand" />
        <meta property="image" content="https://github.com/JRH89/nextjs-store/blob/main/public/jewelry-cover.png" />
        <link type="image/x-icon" rel="shortcut icon" href="favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={'min-h-screen flex flex-col relative ' + inter.className}>
       <Header />
        <div className='flex-1'>
          {children}
        </div>
        <footer className='flex items-center flex-wrap justify-center border-t border-solid border-slate-300 p-4 md:p-8 gap-4'>
          <Link href={'https://digitalbizcard.netlify.app/dynamic?name=Jared%20Hooker&job=Javascript%20Developer&phone=19096473928&email=gamedevjared%40gmail.com&social1=https%3A%2F%2Flinkedin.com%2Fin%2Fjaredhooker&social2=https%3A%2F%2Fgithub.com%2FJRH89&social3=https%3A%2F%2Fjaredsportfolio.netlify.app&social4=https%3A%2F%2Fplay.google.com%2Fstore%2Fsearch%3Fq%3Dhooker%2520hill%2520studios%26c%3Dapps&social1Label=LinkedIN&social2Label=Github&social3Label=Portfolio&social4Label=Google%20Play'} target='_blank'>
          <i className="fa-solid fa-envelope text-slate-700 hover:text-slate-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl"></i>
          </Link>
          <Link href={'https://jaredsportfolio.netlify.app'} target='_blank'>
          <i className="fa-solid fa-house text-slate-700 hover:text-slate-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl"></i>
          </Link>
          <Link href={'https://linkedin.com/in/jaredhooker'} target='_blank'>
          <i className="fa-brands fa-linkedin text-slate-700 hover:text-slate-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl"></i>
          </Link>
        </footer>
        <div id='portal'></div>
      </body>
    </html>
  )
}
