import Photo from './Photo'
import Reveal from './Reveal'

export function postDate(iso) {
  const [y, m, d] = iso.split('-').map(Number)
  const date = new Date(y, m - 1, d)
  return {
    day: String(d).padStart(2, '0'),
    month: date.toLocaleString('en-GB', { month: 'short' }),
    full: date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
  }
}

export default function PostCard({ tip, delay = 0 }) {
  const date = postDate(tip.date)
  return (
    <Reveal delay={delay} className="h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="relative h-56 overflow-hidden">
          <Photo id={tip.photo} icon={tip.icon} alt={tip.title} w={900} className="h-full w-full" />
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-teal-dark backdrop-blur">{tip.tag}</span>
          <div className="absolute bottom-4 left-4 rounded-xl bg-white px-3 py-2 text-center shadow-lg">
            <p className="font-display text-lg font-bold leading-none text-primary">{date.day}</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[.14em] text-ink/50">{date.month}</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[.14em] text-ink/45">Lilongwe Adventist Hospital</p>
          <h3 className="mt-2 font-display text-xl font-bold leading-snug text-charcoal">{tip.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/65">{tip.text}</p>
        </div>
      </article>
    </Reveal>
  )
}
