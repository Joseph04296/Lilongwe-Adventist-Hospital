import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import Button from '../components/Button'
import PostCard, { postDate } from '../components/PostCard'
import { PHONE_MAIN, TIPS, tel } from '../data/site'

export default function BlogPost() {
  const { slug } = useParams()
  const tip = TIPS.find((t) => t.slug === slug)
  if (!tip) return <Navigate to="/blog" replace />
  const date = postDate(tip.date)
  const related = TIPS.filter((t) => t.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero
        kicker={tip.tag}
        title={tip.title}
        text={tip.text}
        photo={tip.photo}
        badge={date.full}
        showActions={false}
      />

      <article className="max-w-3xl mx-auto px-5 py-16">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal/60 transition hover:text-primary">
          <ArrowLeft size={16} /> All articles
        </Link>

        <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-ink/55">
          <span className="rounded-full bg-teal-light px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-teal-dark">{tip.tag}</span>
          <span>{date.full}</span>
          <span aria-hidden="true">·</span>
          <span>By the LAH health team</span>
        </div>

        <p className="mt-8 text-xl leading-relaxed text-charcoal/80">{tip.overview}</p>

        <h2 className="mt-12 font-display text-3xl font-bold text-charcoal">Practical steps</h2>
        <ol className="mt-5 space-y-4">
          {tip.points.map((point, i) => (
            <li key={point} className="flex gap-4 rounded-2xl bg-mist p-5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-teal text-sm font-bold text-charcoal">{i + 1}</span>
              <span className="leading-relaxed text-ink/70">{point}</span>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-2xl border border-teal/30 bg-teal-light/50 p-6 md:p-7">
          <h3 className="font-display text-xl font-bold text-charcoal">When to seek care</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/65">
            If your symptoms are severe, sudden or not improving, contact the hospital. Our team is available 24 hours a day, 7 days a week.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button to="/book" variant="teal" size="sm">Book an appointment</Button>
            <Button href={tel} variant="outline" size="sm"><Phone size={16} /> {PHONE_MAIN}</Button>
          </div>
        </div>
      </article>

      <section className="bg-cloud py-16">
        <div className="max-w-7xl mx-auto px-5">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-teal-dark">Keep reading</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-charcoal">More from the blog</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((t, i) => <PostCard key={t.slug} tip={t} delay={(i % 3) * 80} />)}
          </div>
        </div>
      </section>
    </>
  )
}
