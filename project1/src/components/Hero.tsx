import heroImage from '../assets/alihassan.jpg'
import '../styles/Hero.css'

function Hero() {
  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__status">
            <span className="hero__dot" />
            Open to new projects
          </p>

          <h1 className="hero__title">
            Hi, I’m Ali Hassan. I build clean, fast interfaces with React.
          </h1>

          <p className="hero__lead">
            I’m a developer who enjoys turning ideas into simple, well-made web
            apps. Right now I’m sharpening my skills in React and TypeScript.
          </p>

          <div className="hero__actions">
            <button
              type="button"
              className="hero__button hero__button--primary"
              onClick={handleContactClick}
            >
              Contact me
            </button>
            <a href="#skills" className="hero__button hero__button--ghost">
              View my skills
            </a>
          </div>
        </div>

        <div className="hero__frame">
          <img className="hero__photo" src={heroImage} alt="Portrait of Your Name" />
        </div>
      </div>
    </section>
  )
}

export default Hero
