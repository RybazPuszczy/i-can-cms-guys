'use client'

import { usePathname } from 'next/navigation'

export default function Footer() {
  return usePathname() == '/' ? (
    <footer className="m-2.5 p-3.75">
      <address className="max-w-112.5 md:max-w-max mx-auto not-italic text-lg text-gray-600 whitespace-pre p-5">
        e-mail:{'   '}
        <a
          href="mailto:parafia@swjozefpuszczykowo.pl"
          className="text-blue-500 hover:text-theme-gold font-semibold"
        >
          parafia@swjozefpuszczykowo.pl
        </a>
      </address>
    </footer>
  ) : (
    <></>
  )
}
