import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Seo from '../seo/Seo.jsx'
import { site } from '../data/site.js'
import { groups, byGroup, services } from '../data/services.js'

const steps = [
  ['Within one working day', 'We reply with a few questions or a time for a short call.'],
  ['Free 20-minute call', 'We talk through your goals, pages and budget. No obligation.'],
  ['Fixed-price quote', 'You get a written scope, price and timeline before any work starts.'],
]
const realPhone = site.phone && !site.phone.includes('00000')

export default function Contact() {
  const [params] = useSearchParams()
  const [state, setState] = useState('idle') // idle | sending | sent | error | mail
  const [f, setF] = useState({ name: '', email: '', phone: '', service: 'Not sure yet', msg: '', website: '' })
  // Pre-select the service a visitor came from (?service=...). Done after load so it matches the prerendered page.
  useEffect(() => {
    const pick = params.get('service')
    if (pick && services.some((s) => s.title === pick)) setF((x) => ({ ...x, service: pick }))
  }, [params])
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (f.website) return // spam bots fill the hidden field
    const body = `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nService: ${f.service}\n\n${f.msg}`
    if (!site.formEndpoint) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Enquiry: ' + f.service)}&body=${encodeURIComponent(body)}`
      setState('mail')
      return
    }
    setState('sending')
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: f.name, email: f.email, phone: f.phone, service: f.service, message: f.msg, _subject: `Enquiry: ${f.service}` }),
      })
      setState(res.ok ? 'sent' : 'error')
    } catch { setState('error') }
  }

  return (
    <>
      <Seo title="Contact Us for a Free Website Quote" crumbs={[{ label: 'Contact' }]}
        description={`Tell ${site.name} about your website, SEO or marketing project. Free consultation and a fixed-price quote within one working day.`} />
      <PageHero title="Get a free quote" text="Tell us about your project. We reply within one working day." crumbs={[{ label: 'Contact' }]} />
      <section className="sec">
        <div className="wrap cgrid">
          {state === 'sent' ? (
            <div className="form form--done" role="status">
              <h2>Thank you, {f.name.split(' ')[0] || 'we got it'}!</h2>
              <p>Your enquiry is with us. We will reply to {f.email} within one working day.</p>
            </div>
          ) : (
            <form className="form" onSubmit={submit}>
              <div className="form__row">
                <label>Name<input required value={f.name} onChange={set('name')} autoComplete="name" /></label>
                <label>Phone<input type="tel" value={f.phone} onChange={set('phone')} autoComplete="tel" /></label>
              </div>
              <label>Email<input required type="email" value={f.email} onChange={set('email')} autoComplete="email" /></label>
              <label>Service
                <select value={f.service} onChange={set('service')}>
                  <option>Not sure yet</option>
                  {groups.map((g) => (
                    <optgroup key={g.id} label={g.name}>{byGroup(g.id).map((s) => <option key={s.slug}>{s.title}</option>)}</optgroup>
                  ))}
                </select>
              </label>
              <label>Project details<textarea rows="5" value={f.msg} onChange={set('msg')} placeholder="What are you building, and what result do you want?" /></label>
              <label className="hp" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={f.website} onChange={set('website')} /></label>
              <button className="btn btn--solid" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send enquiry'}</button>
              {state === 'mail' && <p className="form__ok" role="status">Opening your email app. If nothing opens, write to {site.email}.</p>}
              {state === 'error' && <p className="form__ok" role="alert">Something went wrong. Please email us at {site.email}.</p>}
              <p className="form__note">We only use your details to reply to this enquiry.</p>
            </form>
          )}
          <aside className="cinfo">
            <h3>Contact details</h3>
            <p><strong>Email</strong><br /><a href={`mailto:${site.email}`}>{site.email}</a></p>
            {realPhone && <p><strong>Phone</strong><br /><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></p>}
            {site.whatsapp && <p><strong>WhatsApp</strong><br /><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">Chat with us</a></p>}
            <p><strong>Location</strong><br />{site.city}</p>
            <p><strong>Hours</strong><br />{site.hours}</p>
            <h3 className="cinfo__next">What happens next</h3>
            <ol className="nextsteps">{steps.map(([t, d]) => <li key={t}><strong>{t}</strong><span>{d}</span></li>)}</ol>
          </aside>
        </div>
      </section>
    </>
  )
}
