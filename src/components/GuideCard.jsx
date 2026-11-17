import { Link } from 'react-router-dom'
import { formatDate } from '../data/guides.js'

export default function GuideCard({ g }) {
  return (
    <article className="gdcard">
      <span className="gdcard__tag">{g.tag}</span>
      <h3><Link to={`/guides/${g.slug}`}>{g.title}</Link></h3>
      <p>{g.desc}</p>
      <span className="gdcard__meta">{g.minutes} min read · {formatDate(g.date)} <span aria-hidden="true">→</span></span>
    </article>
  )
}
