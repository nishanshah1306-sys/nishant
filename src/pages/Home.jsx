import { Link } from 'react-router-dom'
import HomeHero from '../components/home/HomeHero.jsx'
import GroupCards from '../components/home/GroupCards.jsx'
import Featured from '../components/home/Featured.jsx'
import ProjectsShowcase from '../components/home/ProjectsShowcase.jsx'
import WhyUs from '../components/home/WhyUs.jsx'
import ProcessSteps from '../components/ProcessSteps.jsx'
import Accordion from '../components/Accordion.jsx'
import GuideCard from '../components/GuideCard.jsx'
import CTABand from '../components/CTABand.jsx'
import Seo from '../seo/Seo.jsx'
import { faqSchema } from '../seo/schema.js'
import { groups } from '../data/services.js'
import { guides } from '../data/guides.js'
import { site } from '../data/site.js'

const faqs = [
  ['What does a WordPress website cost?', 'It depends on the number of pages, features and whether you need a store, bookings or custom design. After a short call we send a fixed-price quote within one working day, so you know the full cost before work starts.'],
  ['How long does it take to build a website?', 'A landing page takes 3 to 7 days, a business website 2 to 4 weeks and an online store 3 to 6 weeks. Every service page lists its typical timeline.'],
  ['Do you work with clients outside Thane and Mumbai?', 'Yes. We work with businesses across India and abroad over video calls, email and WhatsApp.'],
  ...groups[0].faqs.slice(0, 2),
  ...groups[1].faqs.slice(0, 2),
]

export default function Home() {
  return (
    <>
      <Seo fullTitle={`WordPress Website Development and SEO Agency in ${site.locality} | ${site.name}`}
        description={`${site.name} builds fast WordPress websites, WooCommerce stores and landing pages, then grows them with SEO, Meta Ads and care plans. Free quote in one working day.`}
        schema={[faqSchema(faqs)]} />
      <HomeHero />
      <GroupCards />
      <Featured />
      <ProjectsShowcase />
      <WhyUs />
      <section className="sec sec--tint">
        <div className="wrap">
          <div className="sec__head"><p className="eyebrow">How we work</p><h2>A simple, transparent process.</h2><p>The same clear path for every website project, with no surprises on price or timeline.</p></div>
          <ProcessSteps steps={groups[0].steps} wide />
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec__head sec__head--row">
            <div><p className="eyebrow">Guides</p><h2>Free advice from our team.</h2><p>Practical checklists you can use today, even if you never hire us.</p></div>
            <Link to="/guides" className="btn btn--ghost">All guides →</Link>
          </div>
          <div className="ggrid">{guides.slice(0, 3).map((g) => <GuideCard key={g.slug} g={g} />)}</div>
        </div>
      </section>
      <section className="sec sec--tint">
        <div className="wrap faqwrap">
          <div className="sec__head">
            <p className="eyebrow">FAQ</p>
            <h2>Questions clients ask us.</h2>
            <p>Straight answers before you get in touch. Still unsure? <Link to="/contact">Ask us directly</Link>.</p>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>
      <CTABand />
    </>
  )
}
