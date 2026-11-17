import PageHero from '../components/PageHero.jsx'
import GuideCard from '../components/GuideCard.jsx'
import CTABand from '../components/CTABand.jsx'
import Seo from '../seo/Seo.jsx'
import { itemListSchema } from '../seo/schema.js'
import { guides } from '../data/guides.js'

export default function Guides() {
  const crumbs = [{ label: 'Guides' }]
  return (
    <>
      <Seo title="WordPress, SEO and Website Guides" crumbs={crumbs}
        description="Practical, plain-language guides on WordPress speed, local SEO, website redesigns and growing your business online. Written by our developer and marketer."
        schema={[itemListSchema('Guides', guides.map((g) => ({ name: g.title, to: `/guides/${g.slug}` })))]} />
      <PageHero title="Guides and checklists" crumbs={crumbs}
        text="Practical advice from the work we do every day. No jargon, just the steps that make a website faster, easier to find and better at bringing in customers." />
      <section className="sec">
        <div className="wrap">
          <div className="ggrid">{guides.map((g) => <GuideCard key={g.slug} g={g} />)}</div>
        </div>
      </section>
      <CTABand title="Prefer us to do it for you?" />
    </>
  )
}
