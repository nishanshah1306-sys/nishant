import { useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTABand from '../components/CTABand.jsx'
import Seo from '../seo/Seo.jsx'
import { itemListSchema } from '../seo/schema.js'
import { groups, services, getGroup } from '../data/services.js'

// Each category has its own address (for example /services/digital-marketing) so Google can index it.
export default function Services({ group }) {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  // Old links used ?group=...; send them to the category page after the first render.
  const old = !group && getGroup(params.get('group'))
  useEffect(() => { if (old) navigate(`/services/${old.slug}`, { replace: true }) }, [old, navigate])

  const g = getGroup(group)
  const list = g ? services.filter((s) => s.group === g.id) : services
  const crumbs = g ? [{ label: 'Services', to: '/services' }, { label: g.name }] : [{ label: 'Services' }]

  return (
    <>
      <Seo
        title={g ? g.seoTitle : 'WordPress, SEO and Website Care Services'}
        description={g ? `${g.intro} Explore ${list.length} ${g.name.toLowerCase()} services.` : `${services.length} services across WordPress development, digital marketing and website maintenance. See what is included, timelines and FAQs for each.`}
        crumbs={crumbs}
        schema={[itemListSchema(g ? g.name : 'Services', list.map((s) => ({ name: s.title, to: `/services/${s.slug}` })))]}
      />
      <PageHero title={g ? `${g.name} services` : 'Our services'} tone={g?.color}
        text={g ? g.intro : 'WordPress development, digital marketing and ongoing care. Open any service for full details, what is included and how long it takes.'} crumbs={crumbs} />
      <section className="sec">
        <div className="wrap">
          <nav className="filters" aria-label="Service categories">
            <Link className={!g ? 'is-on' : ''} to="/services">All ({services.length})</Link>
            {groups.map((x) => (
              <Link key={x.id} className={g?.id === x.id ? 'is-on' : ''} style={{ '--tone': x.color }} to={`/services/${x.slug}`}>
                {x.name} ({services.filter((s) => s.group === x.id).length})
              </Link>
            ))}
          </nav>
          <div className="sgrid" key={group || 'all'}>{list.map((s, i) => <ServiceCard key={s.slug} s={s} i={i} />)}</div>
        </div>
      </section>
      <CTABand />
    </>
  )
}
