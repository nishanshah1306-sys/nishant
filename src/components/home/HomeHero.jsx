import { useState } from 'react'
import { Link } from 'react-router-dom'
import CountUp from '../CountUp.jsx'
import { getService } from '../../data/services.js'
import { site } from '../../data/site.js'

const goals = [
  { id: 'site', label: 'I need a new website', picks: ['business-and-corporate-websites', 'woocommerce-store-setup', 'landing-page-development'] },
  { id: 'traffic', label: 'I want more customers', picks: ['seo-setup-and-optimization', 'local-seo-and-google-business-profile', 'meta-ads-management'] },
  { id: 'fix', label: 'My site is slow or broken', picks: ['speed-and-core-web-vitals-optimization', 'website-audit', 'bug-fixing-and-small-customizations'] },
]

export default function HomeHero() {
  const [goal, setGoal] = useState(goals[0])
  return (
    <section className="hh">
      <div className="wrap hh__grid">
        <div className="hh__copy">
          <p className="eyebrow"><span className="dot" aria-hidden="true" />WordPress studio in {site.locality} · taking new projects</p>
          <h1>WordPress websites that <em>bring in customers.</em></h1>
          <p className="hh__lead">A senior frontend developer and a digital marketer, working as one team. We build your site, make it fast, get it found and keep it running.</p>
          <div className="hh__cta">
            <Link className="btn btn--solid btn--lg" to="/contact">Get a free quote <span aria-hidden="true">→</span></Link>
            <Link className="btn btn--ghost btn--lg" to="/projects">See our work</Link>
          </div>
          <dl className="hh__stats">
            <div><dt><CountUp to={7} suf="+" /></dt><dd>years building WordPress sites</dd></div>
            <div><dt><CountUp to={9} suf="+" /></dt><dd>years in digital marketing</dd></div>
            <div><dt><CountUp to={25} /></dt><dd>services under one roof</dd></div>
          </dl>
        </div>

        <aside className="finder" aria-label="Find the right service">
          <p className="finder__kicker">Start here</p>
          <h2>What do you need help with?</h2>
          <div className="finder__goals" role="group" aria-label="Your goal">
            {goals.map((g) => (
              <button key={g.id} aria-pressed={goal.id === g.id} className={goal.id === g.id ? 'is-on' : ''} onClick={() => setGoal(g)}>{g.label}</button>
            ))}
          </div>
          <ul key={goal.id} className="finder__list">
            {goal.picks.map((slug) => {
              const s = getService(slug)
              return <li key={slug}><Link to={`/services/${slug}`}><strong>{s.title}</strong><span>{s.time} →</span></Link></li>
            })}
          </ul>
        </aside>
      </div>
      <div className="stack" aria-label="Tools we work with">
        <div className="stack__track">
          {[0, 1].map((k) => (
            <ul key={k} aria-hidden={k === 1}>
              {['WordPress', 'WooCommerce', 'Elementor', 'Gutenberg', 'Rank Math', 'Google Analytics 4', 'Search Console', 'Meta Ads', 'Razorpay', 'Cloudflare', 'LearnDash', 'Google Tag Manager'].map((t) => <li key={t}>{t}</li>)}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
