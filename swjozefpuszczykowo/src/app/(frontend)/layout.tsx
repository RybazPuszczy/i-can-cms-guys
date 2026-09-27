import React from 'react'
import './styles.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang='pl'>
      <body>

        <header>
          <a href='/'>
            <img src={'https://swjozefpuszczykowo.pl/images/h1.jpg'} alt='Parafia św. Józefa w Puszczykowie'/>
          </a>
          
          <div>
            {/* <ul> */}
              {/* <li> */}
                <img src={'https://swjozefpuszczykowo.pl/images/slideshow/b7.jpg'} />
                {/* </li> */}
            {/* </ul> */}
          </div>

          <nav>
            <ul>
              <li>
                <a href='/'>Aktualności</a>
              </li>

              <li>
                <button type='button'>Ogłoszenia</button>
                <ul>
                  <li><a href='/ogloszenia/intencje-mszalne'>Intencje mszalne</a></li>
                  <li><a href='/ogloszenia/ogloszenia-duszpasterskie'>Ogłoszenia duszpasterskie</a></li>
                </ul>
              </li>

              <li>
                <button type='button'>Jan Paweł II</button>
                <ul>
                  <li><a href='/jan-pawel-ii/dzwon'>Dzwon</a></li>
                  <li><a href='/jan-pawel-ii/kalendarium'>Kalendarium</a></li>
                  <li><a href='/jan-pawel-ii/sala'>Sala</a></li>
                </ul>
              </li>

              <li>
                <a href='/kaplica'>Kaplica</a>
              </li>

              <li>
                <button type='button'>Parafia</button>
                <ul>
                  <li><a href='/parafia/informacje'>Informacje</a></li>
                  <li><a href='/parafia/patron'>Patron</a></li>
                  <li><a href='/parafia/rady-parafialne'>Rady parafialne</a></li>
                  <li><a href='/parafia/historia-kosciola'>Historia kościoła</a></li>
                </ul>
              </li>

              <li>
                <button type='button'>Wspólnoty</button>
                <ul>
                  <li><a href='/wsplonoty/caritas'>Caritas</a></li>
                  <li><a href='/wsplonoty/grupa-rodzin'>Grupa Rodzin</a></li>
                  <li><a href='/wsplonoty/grupa-sw-marty'>Grupa św. Marty</a></li>
                  <li><a href='/wsplonoty/ksm'>KSM</a></li>
                  <li><a href='/wsplonoty/schola'>Schola</a></li>
                  <li><a href='/wsplonoty/sluzba-liturgiczna'>Służba Liturgiczna</a></li>
                  <li><a href='/wsplonoty/spiewnik-domowy'>Śpiewnik domowy</a></li>
                  <li><a href='/wsplonoty/zywy-rozaniec'>Żywy Różaniec</a></li>
                </ul>
              </li>

              <li>
                <a href='/galeria'>Galeria</a>
              </li>


              <li>
                <button type='button'>Ochrona dzieci</button>
                <ul>
                  <li><a href='/ochrona-dzieci/standardy-ochrony-dzieci'>Standardy ochrony dzieci</a></li>
                </ul>
              </li>

            </ul>
          </nav>
        </header>

        <main>
          <section>
            {children}
          </section>

          <aside>
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
              <p>
                Niedziela, godz. 12:00
              </p>  
              <a href='https://www.youtube.com/channel/UCXJwgvng4Q2Kfz9-m5Aa5iw' rel='noopener noreferrer'>
                <img src='https://swjozefpuszczykowo.pl/images/23/on-line12.jpg' alt='Transmisja na żywo'/>
              </a>
              <a href='https://www.youtube.com/channel/UCXJwgvng4Q2Kfz9-m5Aa5iw/videos' rel='noopener noreferrer'>
                <img src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500' alt='Kanał YouTube'/>
                <span>Parafia św. Józefa w Puszczykowie</span>
              </a>
            </section>

            <section>
              <h3>Konta parafii św. Józefa</h3>
              <address>
                ul. Dworcowa 16<br/>
                62-040 Puszczykowo
              </address>
              <p>86904800070006736420000001</p>
              <p>- - - - - - - - - - - - - - - - - - - - - - - </p>
              <p>59904800070006736420000002</p>
              <h3>Konto Caritas Parafialna</h3>
              <p>91904800070000775120000001</p>
            </section>

          </aside>
        </main>

        <footer>
          <address>
            e-mail: <a href='mailto:parafia@swjozefpuszczykowo.pl'>parafia@swjozefpuszczykowo.pl</a>
          </address>
        </footer>
        
      </body>
    </html>
  )
}
