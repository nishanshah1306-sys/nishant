import useReveal from '../hooks/useReveal.js'

// Wrapper that fades and slides its content in on scroll. Use delay (seconds) to stagger siblings.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, shown] = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${shown ? 'is-in' : ''} ${className}`} style={{ '--d': `${delay}s`, ...style }} {...rest}>
      {children}
    </Tag>
  )
}
