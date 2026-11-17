import { useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal.js'

// Counts from 0 to "to" when scrolled into view.
export default function CountUp({ to, pre = '', suf = '', ms = 1600 }) {
  const [ref, shown] = useReveal(0.4)
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!shown) return
    let raf, t0
    const tick = (t) => {
      t0 ??= t
      const p = Math.min((t - t0) / ms, 1)
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [shown, to, ms])
  return <span ref={ref}>{pre}{n}{suf}</span>
}
