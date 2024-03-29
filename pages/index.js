import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Head>
        <title>HomePage | Trai</title>
        <meta name="description" content="Trai - World Class Recruitment Agency Index" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/svg/Copy_of_Black_Simple_Clothing_Brand_Logo_-_2.svg" />
      </Head>
    <Navbar />
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      
    </main>
<Footer />
   </>
  )
}
