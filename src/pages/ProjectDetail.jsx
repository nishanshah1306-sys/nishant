import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import ProjectPreview from '../components/ProjectPreview.jsx'
import CountUp from '../components/CountUp.jsx'
import Reveal from '../components/Reveal.jsx'
import CTABand from '../components/CTABand.jsx'
import Seo from '../seo/Seo.jsx'
import NotFound from './NotFound.jsx'
import { projects, getProject, hasDemo } from '../data/projects.js'
import { getService } from '../data/services.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const [mobile, setMobile] = useState(false)
  const p = getProject(slug)
  if (!p) return <NotFound />
  const i = projects.findIndex((x) => x.slug === slug)
  const next = projects[(i + 1) % projects.length]

  return (
    <>
      <Seo title={`${p.name}: ${p.category} Case Study`} description={`${p.summary} ${p.challenge}`} type="article"
        crumbs={[{ label: 'Projects', to: '/projects' }, { label: p.name }]} />
      <PageHero title={p.name} text={p.summary} tone={p.colors[0]} crumbs={[{ label: 'Projects', to: '/projects' }, { label: p.name }]} />
      <section className="sec">
        <div className="wrap pdetail">
          <div className="pdetail__main">
            <div className="device">
              <div className="device__toggle" role="group" aria-label="Preview size">
                <button className={!mobile ? 'is-on' : ''} onClick={() => setMobile(false)}>Desktop</button>
                <button className={mobile ? 'is-on' : ''} onClick={() => setMobile(true)}>Mobile</button>
              </div>
              <div className="device__stage"><ProjectPreview p={p} mobile={mobile} /></div>
            </div>

            <Reveal as="div" className="story">
              <h2>The challenge</h2><p>{p.challenge}</p>
              <h2>What we did</h2><p>{p.solution}</p>
            </Reveal>

            <h2>Results</h2>
            <div className="results">
              {p.results.map((r) => (
                <div key={r.l}><strong><CountUp to={r.n} pre={r.pre} suf={r.suf} /></strong><span>{r.l}</span></div>
              ))}
            </div>

            <h2>Services used</h2>
            <ul className="used">
              {p.services.map((s) => { const sv = getService(s); return <li key={s}><Link to={`/services/${s}`}>{sv.title}</Link></li> })}
            </ul>

            <Link to={`/projects/${next.slug}`} className="nextp"><small>Next project</small>{next.name}</Link>
          </div>

          <aside className="detail__side">
            <div className="quote">
              <h3>Project facts</h3>
              <dl>
                <dt>Category</dt><dd>{p.category}</dd>
                <dt>Location</dt><dd>{p.place}</dd>
                <dt>Year</dt><dd>{p.year}</dd>
                <dt>Timeline</dt><dd>{p.timeline}</dd>
                <dt>Built with</dt><dd>{p.tools.join(', ')}</dd>
              </dl>
              {hasDemo(p) && <a className="btn btn--line btn--block" href={p.demo} target="_blank" rel="noopener noreferrer">Open live demo</a>}
              <Link className="btn btn--solid btn--block" to={`/contact?service=${encodeURIComponent(getService(p.services[0])?.title || '')}`} style={{ marginTop: 10 }}>Start a similar project</Link>
            </div>
          </aside>
        </div>
      </section>
      <CTABand title="Have a project in mind?" />
    </>
  )
}
