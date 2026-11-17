import { useState } from 'react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="acc">
      {items.map(([q, a], i) => (
        <div key={q} className={`acc__item ${open === i ? 'is-open' : ''}`}>
          <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{q}</span><i aria-hidden="true" />
          </button>
          <div className="acc__panel"><p>{a}</p></div>
        </div>
      ))}
    </div>
  )
}
