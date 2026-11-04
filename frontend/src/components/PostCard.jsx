import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
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

export function readingTime(tip) {
  const content = [tip.text, tip.overview, ...tip.points].join(' ')
  const words = content.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} min read`
}

export default function PostCard({ tip, delay = 0 }) {
  const date = postDate(tip.date)
  const duration = readingTime(tip)
  return (
    <Reveal delay={delay} className="h-full">
      <Link to={`/blog/${tip.slug}`} className="block h-full rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-primary/30 hover:shadow-lg">
          <div className="relative h-56 overflow-hidden">
            <Photo id={tip.photo} icon={tip.icon} alt={tip.title} w={900} className="h-full w-full" />
            <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-teal-dark backdrop-blur">{tip.tag}</span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <p className="text-xs font-medium text-ink/55">{date.full}<span className="mx-2" aria-hidden="true">·</span>{duration}</p>
            <h3 className="mt-2 font-display text-xl font-bold leading-snug text-charcoal">{tip.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{tip.text}</p>
            <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-dark">
              Read more <ArrowRight size={16} />
            </span>
          </div>
        </article>
      </Link>
    </Reveal>
  )
}
