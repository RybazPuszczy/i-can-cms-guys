import React from 'react'
import './styles.css'
import { SiteMap } from '@/model/site-map'
import Navbar from '@/components/Navbar'

const siteMap: SiteMap = [
  { name: 'Aktualności', path: '' },
  {
    name: 'Ogłoszenia',
    path: 'ogloszenia',
    nested: [
      { name: 'Ogłoszenia duszpasterskie', path: 'ogloszenia-duszpasterskie' },
      { name: 'Intencje mszalne', path: 'intencje-mszalne' },
    ],
  },
  {
    name: 'Jan Paweł II',
    path: 'jan-pawel-ii',
    nested: [
      { name: 'Dzwon', path: 'dzwon' },
      { name: 'Kalendarium', path: 'kalendarium' },
      { name: 'Sala', path: 'sala' },
    ],
  },
  { name: 'Kaplica', path: 'kaplica' },
  {
    name: 'Parafia',
    path: 'parafia',
    nested: [
      { name: 'Informacje', path: 'informacje' },
      { name: 'Patron', path: 'patron' },
      { name: 'Rady parafialne', path: 'rady-parafialne' },
      { name: 'Historia kościoła', path: 'historia-kosciola' },
    ],
  },
  {
    name: 'Wspólnoty',
    path: 'wspolnoty',
    nested: [
      { name: 'Caritas', path: 'caritas' },
      { name: 'Grupa Rodzin', path: 'grupa-rodzin' },
      { name: 'Grupa św. Marty', path: 'grupa-sw-marty' },
      { name: 'KSM', path: 'ksm' },
      { name: 'Schola', path: 'Schola' },
      { name: 'Służba liturgiczna', path: 'sluzba-liturgiczna' },
      { name: 'Śpiewnik domowy', path: 'spiewnik-domowy' },
      { name: 'Żywy Różaniec', path: 'zywy-rozaniec' },
    ],
  },
  { name: 'Galeria', path: 'galeria' },
  {
    name: 'Ochrona dzieci',
    path: 'ochrona-dzieci',
    nested: [{ name: 'Standardy Ochrony Dzieci', path: 'standardy-ochrony-dzieci' }],
  },
]

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="pl">
      <body className="bg-theme-green">
        <header className="w-full pb-6.5 border-b-[7px] border-theme-green border-style-solid">
          <div className="w-19/20 sm:w-120 md:w-3xl lg:w-240 xl:w-300 m-auto">
            <a href="/" className="block mt-5 -mb-2.5">
              <img
                src={'https://swjozefpuszczykowo.pl/images/h1.jpg'}
                alt="Parafia św. Józefa w Puszczykowie"
              />
            </a>
            <div className="mt-5 -mb-2.5">
              {/* <ul> */}
              {/* <li> */}
              <img src={'https://swjozefpuszczykowo.pl/images/slideshow/b7.jpg'} />
              {/* </li> */}
              {/* </ul> */}
            </div>
            <div className="mt-5 -mb-2.5">
              <Navbar siteMap={siteMap} />
            </div>
          </div>
        </header>

        <main className="w-full xl:w-300 m-auto bg-white h-full md:grid md:grid-cols-12 py-1.25">
          {children}
        </main>
      </body>
    </html>
  )
}
