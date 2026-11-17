import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CTABand from '../components/CTABand.jsx'
import Seo from '../seo/Seo.jsx'
import { itemListSchema } from '../seo/schema.js'
import { projects, projectCategories } from '../data/projects.js'

export default function Projects() {
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? projects : projects.filter((p) => p.category === cat)
  return (
    <>
      <Seo title="Website Projects and Case Studies" crumbs={[{ label: 'Projects' }]}
        description="Case studies of WordPress business sites, WooCommerce stores, landing pages, course platforms and booking sites, with the challenge, solution and results."
        schema={[itemListSchema('Projects', projects.map((p) => ({ name: p.name, to: `/projects/${p.slug}` })))]} />
      <PageHero title="Our projects" text="Sample projects showing our work across business sites, stores, landing pages, courses and booking systems." crumbs={[{ label: 'Projects' }]} />
      <section className="sec">
        <div className="wrap">
          <div className="filters">
            {projectCategories.map((c) => <button key={c} className={cat === c ? 'is-on' : ''} onClick={() => setCat(c)}>{c}</button>)}
          </div>
          <div className="pgrid" key={cat}>{list.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}</div>
        </div>
      </section>
      <CTABand title="Want a site like one of these?" />
    </>
  )
}
