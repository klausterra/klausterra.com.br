import { EDUCATION } from '../content'
import { Section } from './Section'

export function Education() {
  return (
    <Section
      id="formacao"
      eyebrow="Formação"
      title="Dez formações, na mesma ordem da pilha."
      lede="Não foi planejado como coleção de diploma: cada curso resolveu um problema que apareceu no trabalho da época. Lidas em sequência, elas contam a mesma história — engenharia, automação, gestão, risco, segurança, liderança e agora inteligência artificial."
    >
      <ol className="edu">
        {EDUCATION.map((degree) => (
          <li
            className={`deg ${degree.current ? 'deg-live' : ''}`}
            key={degree.period + degree.school}
          >
            <span className="deg-when">
              {degree.period}
              {degree.current ? (
                <em className="deg-tag">
                  <span className="deg-dot" aria-hidden="true" />
                  em curso
                </em>
              ) : null}
            </span>
            <span className="deg-body">
              <span className="deg-course">{degree.course}</span>
              <span className="deg-school">{degree.school}</span>
            </span>
          </li>
        ))}
      </ol>
    </Section>
  )
}
