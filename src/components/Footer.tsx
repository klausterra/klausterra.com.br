import { IDENTITY } from '../content'
import { POSITIONING } from '../strategyContent'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="shell footer-in">
        <div className="footer-brand">
          <a href="#topo" className="footer-emblem-link" title="Voltar ao topo">
            <img
              className="footer-emblem-img"
              src={IDENTITY.emblem.src}
              alt={IDENTITY.emblem.alt}
              width={46}
              height={55}
              loading="lazy"
              decoding="async"
            />
          </a>

          <div className="footer-text-block">
            <div className="footer-name">
              <b>{POSITIONING.name}</b>
              <span className="footer-role">{POSITIONING.title}</span>
            </div>
            <p className="footer-canonical">
              {POSITIONING.signature} · © {currentYear} Klaus Terra · <a href="https://klausterra.com.br">klausterra.com.br</a>
            </p>
          </div>
        </div>

        <p className="footer-audit">
          Pessoas. Ideias. Software. Um futuro melhor. Informações públicas preservam dados confidenciais, segredos industriais e detalhes sensíveis de clientes.
        </p>
      </div>
    </footer>
  )
}
