import { Link } from 'react-router-dom'
import { projects } from '../../data/projects.js'
import ProjectCard from '../ProjectCard.jsx'

export default function ProjectsShowcase() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec__head sec__head--row">
          <div><p className="eyebrow">Selected work</p><h2>Websites built to perform.</h2><p>Open any project for the challenge, what we did and the results.</p></div>
          <Link to="/projects" className="btn btn--ghost">All projects →</Link>
        </div>
        <div className="pgrid">{projects.slice(0, 3).map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}</div>
      </div>
    </section>
  )
}
