import Navbar from '../components/navbar.tsx'
import './home.css'

export default function Home() {
  return (
    <div className="page">
      <Navbar />

      <main className="main">
        <p className="eyebrow">Hello</p>
        <h1>Your name</h1>
        <p className="lead">
          A short line about what you do. Edit this in{' '}
          <code>pages/home.tsx</code>.
        </p>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()}</small>
      </footer>
    </div>
  )
}
