import './navbar.css'

export default function Navbar() {
  return (
    <header className="header">
      <span className="logo">Portfolio</span>
      <nav className="nav" aria-label="Primary">
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
