import { Link } from 'react-router-dom'
import ProjectPreview from './ProjectPreview.jsx'
import useReveal from '../hooks/useReveal.js'
import { hasDemo } from '../data/projects.js'

export default function ProjectCard({ p, i = 0 }) {
  const [ref, shown] = useReveal()
  return (
    <article ref={ref} className={`pcard reveal ${shown ? 'is-in' : ''}`} style={{ '--d': `${(i % 3) * 0.08}s`, '--c2': p.colors[1] }}>
      <Link to={`/projects/${p.slug}`} className="pcard__shot" aria-label={`${p.name} case study`} tabIndex={-1}><ProjectPreview p={p} /></Link>
      <div className="pcard__body">
        <span className="pcard__tag">{p.category} · {p.place}</span>
        <h3><Link to={`/projects/${p.slug}`}>{p.name}</Link></h3>
        <p>{p.summary}</p>
        <div className="pcard__links">
          <Link to={`/projects/${p.slug}`}>Read case study →</Link>
          {hasDemo(p) && <a href={p.demo} target="_blank" rel="noopener noreferrer">Live demo ↗</a>}
        </div>
      </div>
    </article>
  )
}
