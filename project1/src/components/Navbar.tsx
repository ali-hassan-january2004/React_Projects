import '../styles/Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand">
          <span className="navbar__mark">AH</span>
          <span className="navbar__name">Ali Hassan</span>
        </a>

        <nav aria-label="Main">
          <ul className="navbar__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
