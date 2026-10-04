export default function Content(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <section className="md:col-span-9 *:max-w-112.5 md:max-w-max *:mx-auto mx-2.5 px-3.75 py-1.25 my-1.25">
      {children}
    </section>
  )
}
