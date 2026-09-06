import { IDENTITY } from '../content'

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
              <b>{IDENTITY.name}</b>
              <span className="footer-role">Executivo de Tecnologia, Produto & IA · Founder / BlackHex</span>
            </div>
            <p className="footer-canonical">
              © {currentYear} Klaus Terra · <a href="https://klausterra.blackhex.com.br">klausterra.blackhex.com.br</a> · Todos os direitos reservados.
            </p>
          </div>
        </div>

        <p className="footer-audit">
          Dados e métricas auditados. Nomes de repositórios confidenciais, endpoints internos e dados sensíveis de clientes não constam deste site público.
        </p>
      </div>
    </footer>
  )
}
