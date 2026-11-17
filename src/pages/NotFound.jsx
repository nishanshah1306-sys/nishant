import { Link } from 'react-router-dom'
import Seo from '../seo/Seo.jsx'

export default function NotFound() {
  return (
    <section className="sec">
      <Seo title="Page not found" description="This page does not exist. Browse our services, projects and guides instead." noindex />
      <div className="wrap" style={{ textAlign: 'center', padding: '80px 0' }}>
        <h1>This page does not exist</h1>
        <p style={{ margin: '12px auto 28px' }}>The link may be old or mistyped. Browse our services instead.</p>
        <div className="hh__cta" style={{ justifyContent: 'center' }}>
          <Link className="btn btn--solid" to="/services">View services</Link>
          <Link className="btn btn--line" to="/guides">Read our guides</Link>
        </div>
      </div>
    </section>
  )
}
