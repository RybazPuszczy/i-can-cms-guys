import React from 'react'
import './styles.css'
import createTransformer from 'tailwind-group-variant'
import { SiteMap } from '@/model/site-map'
import Navbar from '@/components/Navbar'

const expandVariant = createTransformer()

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

        <main className="w-19/20 sm:w-120 md:w-3xl lg:w-240 xl:w-300 m-auto bg-white h-full md:grid md:grid-cols-12">
          <section className="md:col-span-9">{children}</section>
          <aside className="md:col-span-3">
            <section>
              <h3>Msze Święte</h3>
              <div>
                <h4>Niedziele i Święta:</h4>
                <ul>
                  <li>7:00</li>
                  <li>9:00</li>
                  <li>10:30</li>
                  <li>12:00</li>
                  <li>18:00</li>
                </ul>

                <h4>Dni powszednie:</h4>
                <ul>
                  <li>7:00</li>
                  <li>18:00</li>
                </ul>
              </div>
            </section>

            <section>
              <h3>Transmijsa Mszy św.</h3>
              <p>Niedziela, godz. 12:00</p>
              <a
                href="https://www.youtube.com/channel/UCXJwgvng4Q2Kfz9-m5Aa5iw"
                rel="noopener noreferrer"
              >
                <img
                  src="https://swjozefpuszczykowo.pl/images/23/on-line12.jpg"
                  alt="Transmisja na żywo"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCXJwgvng4Q2Kfz9-m5Aa5iw/videos"
                rel="noopener noreferrer"
              >
                <img
                  src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
                  alt="Kanał YouTube"
                />
                <span>Parafia św. Józefa w Puszczykowie</span>
              </a>
            </section>

            <section>
              <h3>Konta parafii św. Józefa</h3>
              <address>
                ul. Dworcowa 16
                <br />
                62-040 Puszczykowo
              </address>
              <p>86904800070006736420000001</p>
              <p>- - - - - - - - - - - - - - - - - - - - - - - </p>
              <p>59904800070006736420000002</p>
              <h3>Konto Caritas Parafialna</h3>
              <p>91904800070000775120000001</p>
            </section>
          </aside>
          <footer>
            <address>
              e-mail:{' '}
              <a href="mailto:parafia@swjozefpuszczykowo.pl">parafia@swjozefpuszczykowo.pl</a>
            </address>
          </footer>
        </main>
      </body>
    </html>
  )
}
