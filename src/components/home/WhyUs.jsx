import Reveal from '../Reveal.jsx'

const points = [
  ['Developer and marketer in one team', 'Your site is built with search, speed and tracking in mind from the first day, not patched later.'],
  ['Clean code, no bloat', 'Custom themes and carefully chosen plugins keep sites fast and easy to maintain.'],
  ['Clear communication', 'Written scope, fixed timelines and updates you can understand without technical knowledge.'],
  ['Support after launch', 'Care plans and quick fixes so your site stays secure and up to date.'],
]

export default function WhyUs() {
  return (
    <section className="sec sec--dark">
      <div className="wrap why">
        <div className="why__lead">
          <p className="eyebrow eyebrow--light">Why Brightpress</p>
          <h2>Why businesses choose a small, <em>specialist</em> team.</h2>
          <p>You work directly with the two people doing the work: no account managers, no hand-offs.</p>
        </div>
        <div className="why__grid">
          {points.map(([h, p], i) => <Reveal as="article" key={h} delay={i * 0.08}><span>0{i + 1}</span><h3>{h}</h3><p>{p}</p></Reveal>)}
        </div>
      </div>
    </section>
  )
}
