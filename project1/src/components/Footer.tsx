import '../styles/Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <h2 className="footer__title">Let’s build something together.</h2>
            <a className="footer__email" href="mailto:you@example.com">
              alihassan.abbasi0302@gmail.com
            </a>
          </div>

          <ul className="footer__socials">
            <li>
              <a href="https://github.com/ali-hassan-january2004" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ali-hassan-january2004/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__bottom">
          <p>© {year} Ali Hassan. All rights reserved.</p>
          <p>Built with React and TypeScript.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
