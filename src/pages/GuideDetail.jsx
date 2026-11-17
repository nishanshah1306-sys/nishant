import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import GuideCard from '../components/GuideCard.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTABand from '../components/CTABand.jsx'
import Seo from '../seo/Seo.jsx'
import { articleSchema } from '../seo/schema.js'
import NotFound from './NotFound.jsx'
import { guides, getGuide, sectionId, formatDate } from '../data/guides.js'
import { getService } from '../data/services.js'

export default function GuideDetail() {
  const { slug } = useParams()
  const g = getGuide(slug)
  if (!g) return <NotFound />
  const crumbs = [{ label: 'Guides', to: '/guides' }, { label: g.title }]
  const svc = g.services.map(getService).filter(Boolean)
  const more = guides.filter((x) => x.slug !== slug).slice(0, 2)

  return (
    <>
      <Seo title={g.seoTitle} description={g.desc} type="article" crumbs={crumbs} schema={[articleSchema(g)]} />
      <PageHero title={g.title} text={g.desc} crumbs={crumbs} />
      <section className="sec">
        <div className="wrap detail">
          <article className="detail__main article">
            <p className="article__meta">{g.tag} · {g.minutes} min read · Updated <time dateTime={g.updated || g.date}>{formatDate(g.updated || g.date)}</time></p>
            <p className="article__intro">{g.intro}</p>
            {g.sections.map((sec, n) => (
              <section key={sec.h} id={sectionId(sec.h)} className="article__sec">
                <h2><span className="article__num">{n + 1}</span>{sec.h}</h2>
                {(sec.p || []).map((t) => <p key={t}>{t}</p>)}
                {sec.list && <ul className="article__list">{sec.list.map((t) => <li key={t}>{t}</li>)}</ul>}
                {sec.tip && <p className="article__tip"><strong>Tip: </strong>{sec.tip}</p>}
              </section>
            ))}
            <div className="article__cta">
              <h2>Want an expert to handle this?</h2>
              <p>We do this work for businesses every week. Tell us about your site and get a clear, fixed quote within one working day.</p>
              <Link className="btn btn--solid" to={`/contact?service=${encodeURIComponent(svc[0]?.title || '')}`}>Get a free quote</Link>
            </div>
          </article>

          <aside className="detail__side">
            <nav className="toc" aria-label="On this page">
              <h3>On this page</h3>
              <ol>{g.sections.map((sec) => <li key={sec.h}><a href={`#${sectionId(sec.h)}`}>{sec.h}</a></li>)}</ol>
            </nav>
          </aside>
        </div>
      </section>

      <section className="sec sec--tint">
        <div className="wrap">
          <div className="sec__head"><h2>Services related to this guide</h2></div>
          <div className="sgrid">{svc.map((s, i) => <ServiceCard key={s.slug} s={s} i={i} />)}</div>
          {more.length > 0 && (
            <>
              <div className="sec__head" style={{ marginTop: 56 }}><h2>Keep reading</h2></div>
              <div className="ggrid ggrid--two">{more.map((x) => <GuideCard key={x.slug} g={x} />)}</div>
            </>
          )}
        </div>
      </section>
      <CTABand />
    </>
  )
}
