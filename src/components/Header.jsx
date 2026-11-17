import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site, nav } from '../data/site.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  const close = () => setOpen(false)
  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__in">
        <Link to="/" className="logo" onClick={close} aria-label={`${site.name} home`}>
          <span className="logo__mark" aria-hidden="true" />{site.name}
        </Link>
        <nav className={`header__nav ${open ? 'is-open' : ''}`} aria-label="Main">
          {nav.filter((n) => n.to !== '/').map((n) => <NavLink key={n.to} to={n.to} end={n.end} onClick={close}>{n.label}</NavLink>)}
          <Link className="btn btn--solid btn--sm" to="/contact" onClick={close}>Start a project <span aria-hidden="true">→</span></Link>
        </nav>
        <button className="header__burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
    </header>
  )
}
