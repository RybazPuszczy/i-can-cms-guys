import Accounts from '../Accounts'
import Masses from '../Masses'
import Office from '../Office'
import YouTube from '../YouTube'

export default function Sidebar({ widgetList = 'all' }: { widgetList: String[] | 'all' }) {
  return (
    <aside className="md:col-span-3 [&>section]:p-3.75 [&>section]:my-2.5 [&>section]:mx-6 md:[&>section]:ml-0">
      {(widgetList.includes('Masses') || widgetList == 'all') && (
        <section>
          <Masses />
        </section>
      )}
      {(widgetList.includes('YouTube') || widgetList == 'all') && (
        <section>
          <YouTube />
        </section>
      )}
      {(widgetList.includes('Office') || widgetList == 'all') && (
        <section>
          <Office />
        </section>
      )}
      {(widgetList.includes('Accounts') || widgetList == 'all') && (
        <section>
          <Accounts />
        </section>
      )}
    </aside>
  )
}
