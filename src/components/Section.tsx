import type { ReactNode } from 'react'

type Props = {
  id: string
  eyebrow: string
  title: ReactNode
  lede: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, lede, children, className }: Props) {
  return (
    <section id={id} className={className}>
      <div className="shell sec-in">
        <div className="sec-head">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p className="lede">{lede}</p>
        </div>
        {children}
      </div>
    </section>
  )
}
