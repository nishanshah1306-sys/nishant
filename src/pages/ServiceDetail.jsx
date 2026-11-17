import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Accordion from '../components/Accordion.jsx'
import ProcessSteps from '../components/ProcessSteps.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import GuideCard from '../components/GuideCard.jsx'
import CTABand from '../components/CTABand.jsx'
import Seo from '../seo/Seo.jsx'
import { serviceSchema, faqSchema } from '../seo/schema.js'
import NotFound from './NotFound.jsx'
import { getService, getGroup, byGroup, serviceFaqs } from '../data/services.js'
import { projects } from '../data/projects.js'
import { guides } from '../data/guides.js'

const PROPER = ['Meta', 'WooCommerce', 'WordPress', 'Google']
const SMALL = ['and', 'or', 'to', 'for', 'of', 'the', 'a', 'in']
const titleCase = (t) => t.split(' ').map((w, i) => (i && SMALL.includes(w) ? w : w.charAt(0).toUpperCase() + w.slice(1))).join(' ')
const lcFirst = (t) => { const w = t.split(' ')[0]; return PROPER.includes(w) || w === w.toUpperCase() ? t : t.charAt(0).toLowerCase() + t.slice(1) }

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = getService(slug)
  if (!s) return <NotFound />
  const g = getGroup(s.group)
  const group = byGroup(s.group)
  const i = group.findIndex((x) => x.slug === slug)
  const related = group.filter((x) => x.slug !== slug).slice(0, 3)
  const prev = group[(i - 1 + group.length) % group.length]
  const next = group[(i + 1) % group.length]
  const faqs = [...(serviceFaqs[slug] || []), ...g.faqs]
  const work = projects.filter((p) => p.services.includes(slug)).slice(0, 2)
  const reads = guides.filter((x) => x.services.includes(slug)).slice(0, 2)
  const crumbs = [{ label: 'Services', to: '/services' }, { label: g.name, to: `/services/${g.slug}` }, { label: s.title }]

  return (
    <>
      <Seo title={s.title.length > 42 ? titleCase(s.title) : `${titleCase(s.title)} Services`} description={s.sum} crumbs={crumbs}
        schema={[serviceSchema(s, g), faqSchema(faqs)]} />
      <PageHero title={s.title} text={s.sum} tone={g.color} crumbs={crumbs} />

      <section className="sec">
        <div className="wrap detail">
          <article className="detail__main">
            <h2>What is included</h2>
            <ul className="checks" style={{ '--tone': g.color }}>
              {s.inc.map((x) => <li key={x}>{x}</li>)}
            </ul>

            <h2>Who this is for</h2>
            <p className="lead">{s.who}. Typical timeline: <strong>{s.time.toLowerCase()}</strong>.</p>

            <h2>Tools and technologies</h2>
            <div className="tags">{s.tools.map((t) => <span key={t}>{t}</span>)}</div>

            <h2>How we deliver it</h2>
            <ProcessSteps steps={g.steps} />

            {work.length > 0 && (
              <>
                <h2>Projects where we used this</h2>
                <div className="pgrid pgrid--two">{work.map((p, n) => <ProjectCard key={p.slug} p={p} i={n} />)}</div>
              </>
            )}

            <h2>Frequently asked questions</h2>
            <Accordion items={faqs} />

            {reads.length > 0 && (
              <>
                <h2>Helpful reading</h2>
                <div className="ggrid ggrid--two">{reads.map((x) => <GuideCard key={x.slug} g={x} />)}</div>
              </>
            )}

            <nav className="pager" aria-label="More services">
              <Link to={`/services/${prev.slug}`}><small>Previous</small>{prev.title}</Link>
              <Link to={`/services/${next.slug}`}><small>Next</small>{next.title}</Link>
            </nav>
          </article>

          <aside className="detail__side">
            <div className="quote">
              <h3>Quick facts</h3>
              <dl>
                <dt>Category</dt><dd><Link to={`/services/${g.slug}`}>{g.name}</Link></dd>
                <dt>Typical timeline</dt><dd>{s.time}</dd>
                <dt>Best for</dt><dd>{s.who}</dd>
              </dl>
              <Link className="btn btn--solid btn--block" to={`/contact?service=${encodeURIComponent(s.title)}`}>Request a quote</Link>
              <p className="quote__note">Free consultation. Fixed-price quote within one working day.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="sec sec--tint">
        <div className="wrap">
          <div className="sec__head sec__head--row">
            <div><h2>Related services</h2><p>Often combined with {lcFirst(s.title)}.</p></div>
            <Link to={`/services/${g.slug}`} className="btn btn--line">All {g.name.toLowerCase()} services</Link>
          </div>
          <div className="sgrid">{related.map((r, n) => <ServiceCard key={r.slug} s={r} i={n} />)}</div>
        </div>
      </section>
      <CTABand title={`Need ${lcFirst(s.title)}?`} />
    </>
  )
}
