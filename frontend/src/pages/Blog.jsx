import { useState } from 'react'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import Eyebrow from '../components/Eyebrow'
import PostCard from '../components/PostCard'
import { TIPS } from '../data/site'

const TAGS = ['All', ...new Set(TIPS.map((t) => t.tag))]

export default function Blog() {
  const [active, setActive] = useState('All')
  const posts = active === 'All' ? TIPS : TIPS.filter((t) => t.tag === active)

  return (
    <>
      <PageHero
        kicker="Health & wellbeing"
        title="Blog"
        text="Practical health guidance and everyday wellbeing advice from the team at Lilongwe Adventist Hospital."
        src="/images/healthtips.jpg"
        badge="From our team"
        showActions={false}
        fullBleed
      />

      <section className="max-w-7xl mx-auto px-5 py-16 lg:py-20">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Our recent posts</Eyebrow>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-charcoal">Health advice from our team</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/65">Small, consistent choices make a real difference. Browse our latest articles below.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActive(tag)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active === tag ? 'bg-primary text-white' : 'border border-slate-200 text-ink/60 hover:border-primary/40 hover:text-primary'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((tip, i) => <PostCard key={tip.slug} tip={tip} delay={(i % 3) * 80} />)}
        </div>

        <p className="mt-10 text-sm text-ink/50">General information only — it isn’t a substitute for professional medical advice. Please consult our team about your own health.</p>
      </section>

      <CtaBand
        eyebrow="Your health"
        title="Have a health concern?"
        text="Our team is available 24 hours a day, 7 days a week. Book a consultation or call reception for guidance."
        photo="/images/happy-doc.jpg"
        alt="A clinician at Lilongwe Adventist Hospital"
      />
    </>
  )
}
