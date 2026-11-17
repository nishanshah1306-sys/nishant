import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { groups, byGroup } from '../data/services.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__about">
            <Link to="/" className="logo logo--light"><span className="logo__mark" aria-hidden="true" />{site.name}</Link>
            <p>WordPress development and digital marketing from a two-person specialist team in {site.locality}.</p>
            <p className="footer__contact"><a href={`mailto:${site.email}`}>{site.email}</a>{!site.phone.includes('00000') && <><br />{site.phone}</>}<br />{site.city}<br />{site.hours}</p>
          </div>
          {groups.map((g) => (
            <div key={g.id}>
              <h3>{g.name}</h3>
              <ul>
                {byGroup(g.id).slice(0, 6).map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>)}
                <li><Link className="footer__all" to={`/services/${g.slug}`}>View all →</Link></li>
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__base">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span className="footer__links"><Link to="/projects">Projects</Link><Link to="/guides">Guides</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link></span>
        </div>
      </div>
    </footer>
  )
}
