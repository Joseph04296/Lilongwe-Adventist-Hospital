import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Phone } from 'lucide-react'
import Button from '../components/Button'
import Photo from '../components/Photo'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import { PHONE_MAIN, TIPS, tel } from '../data/site'
import { postDate } from '../components/PostCard'

export default function BlogPost() {
  const { slug } = useParams()
  const tip = TIPS.find((t) => t.slug === slug)
  if (!tip) return <Navigate to="/blog" replace />
  const date = postDate(tip.date)

  return (
    <section className="max-w-7xl mx-auto px-5 py-16 lg:py-24">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_350px] gap-12 lg:gap-16">
        <article>
          <Reveal>
            <Photo id={tip.photo} icon={tip.icon} alt={tip.title} w={1400} className="w-full h-[280px] sm:h-[340px] lg:h-[400px] rounded-3xl" />
          </Reveal>

          <Link to="/blog" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-charcoal/60 transition hover:text-primary">
            <ArrowLeft size={16} /> All articles
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ink/55">
            <span className="rounded-full bg-teal-light px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-teal-dark">{tip.tag}</span>
            <span>{date.full}</span>
            <span aria-hidden="true">·</span>
            <span>By the LAH health team</span>
          </div>

          <div className="mt-8">
            <Eyebrow>{tip.tag}</Eyebrow>
            <h1 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-charcoal">{tip.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">{tip.text}</p>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-ink/70">{tip.overview}</p>

          <div className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-charcoal">Practical steps</h2>
            <ol className="mt-5 space-y-4">
              {tip.points.map((point, i) => (
                <li key={point} className="flex gap-4 rounded-2xl bg-mist p-5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-teal text-sm font-bold text-charcoal">{i + 1}</span>
                  <span className="leading-relaxed text-ink/70">{point}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 rounded-2xl border border-teal/30 bg-teal-light/50 p-6 md:p-7">
            <h3 className="font-display text-xl font-semibold text-charcoal">When to seek care</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">
              If your symptoms are severe, sudden or not improving, contact the hospital. Our team is available 24 hours a day, 7 days a week.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button to="/book" variant="teal" size="sm">Book an appointment</Button>
              <Button href={tel} variant="outline" size="sm"><Phone size={16} /> {PHONE_MAIN}</Button>
            </div>
          </div>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-32 h-fit">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="font-display text-xl font-semibold text-charcoal">More articles</h2>
            <nav className="mt-4 flex flex-col gap-1">
              {TIPS.filter((item) => item.slug !== slug).map((item) => (
                <Link
                  key={item.slug}
                  to={`/blog/${item.slug}`}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-ink/70 transition hover:bg-mist hover:text-primary"
                >
                  <item.icon size={16} className="shrink-0 text-teal-dark" />
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </section>
  )
}
