import { NAV } from '../content'
import { MoonIcon } from './icons'

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
        <button className="tbtn" onClick={onToggleTheme} title="Alternar tema" aria-label="Alternar tema">
          <MoonIcon />
        </button>
      </div>
    </div>
  )
}
