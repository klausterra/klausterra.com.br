import { useState } from 'react'
import { LAYERS } from '../content'

export function Stack() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const triggerSpark = (step: number) => {
    setActiveStep(step)
  }

  return (
    <div className="stack" id="pilha">
      <div className="stack-cap">
        <span>a pilha · do silício ao agente</span>
        <span className="stack-flow">
          <span className="flow-dot" aria-hidden="true" />
          <span>L0 → L7 · sinal ativo</span>
        </span>
      </div>
      <div className="stack-body" onMouseLeave={() => setActiveStep(null)}>
        <div className="stack-track" aria-hidden="true">
          <div className="stack-pulse" />
          {activeStep !== null && (
            <div
              key={`pulse-${activeStep}`}
              className="stack-pulse-interactive"
              style={{ '--start-step': activeStep } as React.CSSProperties}
            />
          )}
        </div>
        {LAYERS.map((layer, index) => {
          // L7 está no índice 0 (topo); L0 está no índice 7 (base).
          // step representa a ordem temporal do pulso elétrico ascendente:
          // L0 = 0 (silício / início) até L7 = 7 (agente / topo)
          const step = LAYERS.length - 1 - index
          return (
            <div
              className={`layer ${activeStep === step ? 'layer-active' : ''}`}
              key={layer.level}
              style={{ '--step': step } as React.CSSProperties}
              onMouseEnter={() => triggerSpark(step)}
              onTouchStart={() => triggerSpark(step)}
            >
              <div className="layer-node" aria-hidden="true">
                <span className="node-pad" />
              </div>
              <span className="lv">{layer.level}</span>
              <span className="lb">
                <span className="ln">{layer.name}</span>
                <span className="lt">{layer.tech}</span>
                <span className="lp">{layer.product}</span>
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
