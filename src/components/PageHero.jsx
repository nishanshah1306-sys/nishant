import { Link } from 'react-router-dom'

export default function PageHero({ title, text, crumbs = [], tone, eyebrow }) {
  return (
    <section className="phero" style={tone ? { '--tone': tone } : undefined}>
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}><i aria-hidden="true">/</i>{c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</span>
          ))}
        </nav>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {text && <p className="phero__text">{text}</p>}
      </div>
    </section>
  )
}
