import { HolyMasses } from '@/model/holy-masses'

const holyMasses: HolyMasses = {
  sundays: [
    '7:00',
    '9:00',
    '10:30',
    '12:00',
    '18:00',
    /* "20:00" to be handled via manual globals change */
  ],
  weekdays: ['7:00', '18:00'],
}

export default function Masses() {
  return (
    <div className="bg-theme-pale-yellow border-2 border-amber-300 mb-3.75 text-[12pt]/5 max-w-112.5 mx-auto">
      <br />
      <h3 className="text-blue-700 text-center">Msze Święte</h3>
      <br />
      <div>
        <h4 className="text-red-600 text-center">Niedziele i Święta:</h4>
        <ul className="mx-auto w-fit text-cyan-900">
          {holyMasses.sundays.map((hour) => {
            return (
              <li key={'sun-' + hour} className="text-right font-extralight">
                {hour}
              </li>
            )
          })}
        </ul>
        <br />
        <h4 className="text-center font-normal text-cyan-900">Dni powszednie:</h4>
        <ul className="mx-auto w-fit text-cyan-900 font-extralight">
          {holyMasses.weekdays.map((hour) => {
            return (
              <li key={'week-' + hour} className="text-right font-extralight">
                {hour}
              </li>
            )
          })}
        </ul>
        <br />
      </div>
    </div>
  )
}
