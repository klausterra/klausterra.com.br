import { IDENTITY } from '../content'
import { analytics } from '../lib/analytics'

function WhatsAppGlyph() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.86 9.86 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.15h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.11.82.83-3.04-.19-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23a8.23 8.23 0 018.22 8.24c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.4-.12-.56.13-.17.25-.66.81-.81.98-.15.16-.3.19-.55.06-.25-.12-1.06-.39-2.02-1.24-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.17 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.19 1.1.16 1.52.1.46-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29z" />
    </svg>
  )
}

/** Botão flutuante de WhatsApp. Ocre da marca em vez do verde do app,
 *  para não brigar com a paleta — o glifo já é reconhecido sozinho. */
export function WhatsAppButton() {
  return (
    <a
      className="wa-fab"
      href={IDENTITY.whatsapp}
      target="_blank"
      rel="noopener"
      aria-label={`Falar comigo no WhatsApp, ${IDENTITY.whatsappLabel}`}
      onClick={() => analytics.whatsappClick()}
    >
      <WhatsAppGlyph />
      <span className="wa-label">Falar no WhatsApp</span>
    </a>
  )
}
