import Reveal from './Reveal.jsx'

export default function ProcessSteps({ steps, wide = false }) {
  return (
    <ol className={`psteps ${wide ? 'psteps--wide' : ''}`}>
      {steps.map(([t, d], i) => (
        <Reveal as="li" key={t} delay={i * 0.08}><span className="psteps__n">0{i + 1}</span><div><h3>{t}</h3><p>{d}</p></div></Reveal>
      ))}
    </ol>
  )
}
