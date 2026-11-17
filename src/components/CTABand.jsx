import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

export default function CTABand({ title = 'Ready to talk about your project?', text = 'Tell us what you need. We reply within one working day with next steps and a clear, fixed quote.' }) {
  return (
    <section className="cta">
      <div className="wrap cta__in">
        <div>
          <p className="eyebrow eyebrow--light">Free consultation</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta__actions">
          <Link to="/contact" className="btn btn--accent btn--lg">Get a free quote <span aria-hidden="true">→</span></Link>
          <a className="cta__mail" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </section>
  )
}
