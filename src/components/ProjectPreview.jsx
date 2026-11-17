// A stylised browser mockup built with CSS, so the demo cards need no screenshots.
export default function ProjectPreview({ p, mobile = false }) {
  const [c1, c2] = p.colors
  const body = {
    store: <div className="pv__tiles">{[0, 1, 2, 3].map((i) => <div key={i}><b /><s /></div>)}</div>,
    corporate: <div className="pv__cols">{[0, 1, 2].map((i) => <div key={i}><b /><s /><s /></div>)}</div>,
    landing: <div className="pv__form"><s /><s /><b /></div>,
    course: <div className="pv__list">{[70, 45, 20].map((w) => <div key={w}><s /><u style={{ '--w': `${w}%` }} /></div>)}</div>,
    booking: <div className="pv__cal">{Array.from({ length: 14 }, (_, i) => <i key={i} className={i === 5 ? 'on' : ''} />)}</div>,
  }[p.kind]
  return (
    <div className={`pv ${mobile ? 'pv--m' : ''}`} style={{ '--c1': c1, '--c2': c2 }} aria-hidden="true">
      <div className="pv__bar"><i /><i /><i /><span>{p.slug}.in</span></div>
      <div className="pv__page">
        <div className="pv__nav"><b /><span><s /><s /><s /></span></div>
        <div className="pv__hero"><h4>{p.name}</h4><s /><s /><u /></div>
        {body}
      </div>
    </div>
  )
}
