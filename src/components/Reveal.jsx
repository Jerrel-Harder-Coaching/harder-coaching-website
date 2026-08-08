import { useInView } from '../hooks/useInView.js'

// Wrapt content en voegt 'reveal' / 'reveal--in' classes toe zodra het element
// in beeld scrollt. 'delay' (ms) kun je gebruiken om items na elkaar te laten
// verschijnen (bijv. in een lijst of grid).
export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0 }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`reveal${inView ? ' reveal--in' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
