import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  value: string
  className?: string
}

export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState('0')
  const [hasAnimated, setHasAnimated] = useState(false)

  // Extrai o número e sufixos (ex: "20+" -> target: 20, suffix: "+")
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ''

  useEffect(() => {
    const el = ref.current
    if (!el || hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true)
          observer.disconnect()

          const duration = 1400 // ms
          const startTime = performance.now()

          const update = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Easing out cubic: 1 - (1 - t)^3
            const easeOut = 1 - Math.pow(1 - progress, 3)
            const current = Math.round(easeOut * target)

            setDisplayValue(current.toString())

            if (progress < 1) {
              requestAnimationFrame(update)
            } else {
              setDisplayValue(target.toString())
            }
          }

          requestAnimationFrame(update)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, hasAnimated])

  return (
    <span ref={ref} className={className}>
      {hasAnimated ? displayValue : '0'}
      {suffix}
    </span>
  )
}
