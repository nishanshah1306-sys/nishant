import { Link } from 'react-router-dom'
import Reveal from '../Reveal.jsx'
import { groups, byGroup } from '../../data/services.js'

export default function GroupCards() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec__head">
          <p className="eyebrow">What we do</p>
          <h2>Three ways we help your business grow online.</h2>
          <p>Start with one, or combine them. Most clients do.</p>
        </div>
        <div className="gcards">
          {groups.map((g, i) => (
            <Reveal as="article" delay={i * 0.1} key={g.id} className="gcard" style={{ '--tone': g.color }}>
              <span className="gcard__n">0{i + 1}</span>
              <h3><Link to={`/services/${g.slug}`}>{g.name}</Link></h3>
              <p>{g.tagline}</p>
              <ul>{byGroup(g.id).slice(0, 5).map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul>
              <Link className="gcard__more" to={`/services/${g.slug}`}>All {byGroup(g.id).length} {g.short.toLowerCase()} services →</Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
