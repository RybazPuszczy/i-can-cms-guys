'use client'

import { SiteMap } from '@/model/site-map'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react/jsx-runtime'

export default function Navbar({ siteMap }: { siteMap: SiteMap }) {
  return (
    <nav className="w-full">
      <ul className="hidden md:flex items-stretch w-full rounded border border-[#755600] bg-linear-to-b from-[#c28e00] to-[#a87c00] shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
        {mapNavbar(siteMap)}
      </ul>
      <div className="p-5 w-full md:hidden">
        <select className="p-1 w-full static bg-gray-100" defaultValue={usePathname()}>
          {/* <option>Nawigacja mobilna</option> */}
          {mapNavselect(siteMap)}
        </select>
      </div>
    </nav>
  )
}

function mapNavbar(siteMap: SiteMap, currentPath = '/'): any {
  let liClassName =
    currentPath == '/'
      ? 'flex-1 relative border-l border-s-yellow-500 border-r border-e-theme-gold-border first:border-l-0 last:border-r-0'
      : ''
  let linkClassName =
    currentPath == '/'
      ? 'flex items-center justify-center w-full px-1 py-3 text-center text-white text-base lg:text-lg font-normal [text-shadow:1px_0.5px_0px_#000] transition-colors'
      : 'block px-4 py-2 text-left text-white text-sm lg:text-base hover:bg-theme-gold-dark transition-colors'

  return siteMap.map((e) => {
    if (e.nested) {
      return (
        <li key={currentPath + e.path} className={'group ' + liClassName}>
          <button
            type="button"
            className="flex items-center justify-center w-full px-1 py-3 text-center text-white text-base lg:text-lg font-normal [text-shadow:1px_0.5px_0px_#000] hover:bg-theme-gold-border transition-colors cursor-pointer"
          >
            {e.name}
          </button>
          <div className="absolute left-0 top-full hidden group-hover:block w-56 pt-px z-50">
            <ul className="bg-linear-to-b from-theme-gold-light to-theme-gold-darker py-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.3)] border-t border-theme-gold-border">
              {mapNavbar(e.nested, currentPath + e.path + '/')}
            </ul>
          </div>
        </li>
      )
    } else {
      console.log(usePathname())
      return (
        <li key={currentPath + e.path} className={liClassName}>
          <Link
            href={currentPath + e.path}
            className={
              linkClassName +
              (currentPath + e.path == usePathname() ? ' ' : ' hover:') +
              'bg-theme-gold-darker'
            }
          >
            {e.name}
          </Link>
        </li>
      )
    }
  })
}

function mapNavselect(siteMap: SiteMap, currentPath = '/', level = 0): any {
  return siteMap.map((e) => {
    const fullPath = currentPath + e.path

    return (
      <Fragment key={fullPath}>
        <option value={e.nested ? 'javascript:void(0);' : currentPath + e.path}>
          {'- '.repeat(level)}
          {e.name}
        </option>
        {e.nested && mapNavselect(e.nested, fullPath + '/', level + 1)}
      </Fragment>
    )
  })
}
