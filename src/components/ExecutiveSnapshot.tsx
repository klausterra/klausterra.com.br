import { EXECUTIVE_ROLES, EXECUTIVE_SNAPSHOT } from '../strategyContent'

export function ExecutiveSnapshot() {
  return (
    <section className="executive-snapshot" id="executivo" aria-labelledby="executive-snapshot-title">
      <div className="shell executive-snapshot-in">
        <div className="snapshot-copy">
          <p className="eyebrow">Leitura executiva</p>
          <h2 id="executive-snapshot-title">Engenharia, operação, produto e IA na mesma trajetória.</h2>
          <p>
            Minha vantagem não vem de uma única especialidade. Ela vem de acumular camadas: sistemas físicos,
            liderança de grandes equipes, decisões de capital, software, produto e inteligência artificial.
          </p>
        </div>

        <div className="snapshot-metrics" aria-label="Indicadores de experiência">
          {EXECUTIVE_SNAPSHOT.map((item) => (
            <div className="snapshot-metric" key={item.value}>
              <b>{item.value}</b>
              <span>{item.label}</span>
              <small>{item.sub}</small>
            </div>
          ))}
        </div>

        <div className="snapshot-role-strip" aria-label="Posicionamento executivo">
          {EXECUTIVE_ROLES.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
