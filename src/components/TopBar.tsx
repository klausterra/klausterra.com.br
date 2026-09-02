import { NAV, SOCIAL } from '../content'
import { GitHubIcon, InstagramIcon, LinkedInIcon, MoonIcon, YouTubeIcon } from './icons'

const GLYPH = {
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
  github: GitHubIcon,
} as const

export function TopBar({ onToggleTheme }: { onToggleTheme: () => void }) {
  return (
    <div className="topbar">
      <div className="topbar-in">
        <a className="wordmark" href="#topo">
          Klaus Quirino <span>Terra</span>
        </a>
        <nav className="navlinks" aria-label="Seções">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="social">
          {SOCIAL.map((item) => {
            const Glyph = GLYPH[item.id]
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener"
                title={`${item.label} · ${item.handle}`}
                aria-label={`${item.label}, ${item.handle}`}
              >
                <Glyph />
              </a>
            )
          })}
        </div>
        <button className="tbtn" onClick={onToggleTheme} title="Alternar tema" aria-label="Alternar tema">
          <MoonIcon />
        </button>
      </div>
    </div>
  )
}
