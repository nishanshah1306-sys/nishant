import PageHero from '../components/PageHero.jsx'
import CTABand from '../components/CTABand.jsx'
import { site } from '../data/site.js'
import Seo from '../seo/Seo.jsx'

const people = [
  { role: 'Senior Frontend Developer', yrs: '7 years', text: 'Builds custom themes, WooCommerce stores, plugins and fast, accessible interfaces. Owns every line of code that goes on your site.', skills: ['WordPress themes', 'JavaScript', 'WooCommerce', 'Performance'] },
  { role: 'Digital Marketing Specialist', yrs: '9 years', text: 'Plans and runs SEO, Meta Ads, email and analytics. Makes sure every page is built to be found and to convert.', skills: ['SEO', 'Meta Ads', 'Analytics', 'Content strategy'] },
]

export default function About() {
  return (
    <>
      <Seo title="About Our WordPress and Digital Marketing Team" crumbs={[{ label: 'About' }]}
        description={`${site.name} is a two-person studio in ${site.locality}: a senior WordPress developer and a digital marketer who build websites and help them win customers.`} />
      <PageHero title={`About ${site.name}`} text="A two-person studio that builds WordPress websites and then helps them get customers." crumbs={[{ label: 'About' }]} />
      <section className="sec">
        <div className="wrap">
          <div className="sec__head"><h2>The team</h2><p>You deal directly with the specialists who do the work.</p></div>
          <div className="people">
            {people.map((p) => (
              <article key={p.role} className="person">
                <span className="person__yrs">{p.yrs}</span>
                <h3>{p.role}</h3>
                <p>{p.text}</p>
                <div className="tags">{p.skills.map((s) => <span key={s}>{s}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  )
}
