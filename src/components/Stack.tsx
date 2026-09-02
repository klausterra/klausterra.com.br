import { LAYERS } from '../content'

export function Stack() {
  return (
    <div className="stack" id="pilha">
      <div className="stack-cap">
        <span>a pilha</span>
        <span>L7 → L0</span>
      </div>
      {LAYERS.map((layer) => (
        <div className="layer" key={layer.level}>
          <span className="lv">{layer.level}</span>
          <span className="lb">
            <span className="ln">{layer.name}</span>
            <span className="lt">{layer.tech}</span>
            <span className="lp">{layer.product}</span>
          </span>
        </div>
      ))}
    </div>
  )
}
