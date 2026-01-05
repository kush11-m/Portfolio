import { useState } from 'react'
import './App.css'
import kushImage from './assets/kush.png'
import synclyImage from './assets/syncly.png'
import mechroImage from './assets/mechro.png'
import cozycamImage from './assets/cozycam.png'
import myStoryIcon from './assets/my story.svg'
import strengthsIcon from './assets/strengths.svg'
import interestsIcon from './assets/interests.svg'

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    fetch('https://formsubmit.co/ajax/kushagra.work11@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      })
    })
      .then(() => {
        setShowModal(true)
        form.reset()

        setTimeout(() => {
          setShowModal(false)
          window.location.href = '/'
        }, 5000)
      })
      .catch((error) => console.error('Error:', error))
  }
  return (
    <div className="app">
      <div className="desktop">
        {/* Menu Bar */}
        <div className="menubar">
          <div className="menubar-logo">
            <div className="menubar-icon">K</div>
          </div>
          <ul className="menubar-items">
            <li className="menubar-item" onClick={() => document.querySelector('.about')?.scrollIntoView({ behavior: 'smooth' })}>About</li>
            <li className="menubar-item" onClick={() => document.querySelector('.tech-stack')?.scrollIntoView({ behavior: 'smooth' })}>Tech Stack</li>
            <li className="menubar-item" onClick={() => document.querySelector('.projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</li>
            <li className="menubar-item" onClick={() => document.querySelector('.contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</li>
          </ul>
        </div>

        {/* Hero Section */}
        <div className="hero">
          <div className="hero-container">
            <div className="hero-left">
              <div className="hero-content">
                <h1 className="hero-title">Hello.<br />I'm <span className="green">Kush</span>.</h1>
                <p className="hero-subtitle">
                  Developer by skill, designer by instinct
                </p>
                <button className="hero-button" onClick={() => document.querySelector('.contact')?.scrollIntoView({ behavior: 'smooth' })}>Let’s Connect</button>
              </div>
            </div>

            <div className="hero-right">
              <div className="hero-image-container">
                <img src={kushImage} alt="Profile" className="hero-image" />
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="about">
          <div className="about-content">
            <h2 className="about-title">About Me</h2>
            <div className="about-grid">
              <div className="about-card">
                <div className="about-icon">
                  <img src={myStoryIcon} alt="My Story" style={{ width: '60px', height: '60px', filter: 'brightness(0) invert(1)' }} />
                </div>
                <div className="about-card-content">
                  <h3 className="about-card-title">My Story</h3>
                  <p className="about-card-text">
                    I’m a developer who loves crafting clean, thoughtful, and visually striking user interfaces.
                    I care deeply about the small details, how things move, how they feel, and how people experience them.
                    For me, building is not just function; it’s design, emotion, and storytelling through UI.
                  </p>
                </div>
              </div>

              <div className="about-card">
                <div className="about-icon">
                  <img src={strengthsIcon} alt="Strengths" style={{ width: '60px', height: '60px', filter: 'brightness(0) invert(1)' }} />
                </div>
                <div className="about-card-content">
                  <h3 className="about-card-title">Strengths</h3>
                  <p className="about-card-text">
                    I’m a developer who loves crafting clean, thoughtful, and visually striking user interfaces.
                    I care deeply about the small details, how things move, how they feel, and how people experience them.
                    For me, building is not just function; it’s design, emotion, and storytelling through UI.
                  </p>
                </div>
              </div>

              <div className="about-card">
                <div className="about-icon">
                  <img src={interestsIcon} alt="Interests" style={{ width: '60px', height: '60px', filter: 'brightness(0) invert(1)' }} />
                </div>
                <div className="about-card-content">
                  <h3 className="about-card-title">Interests</h3>
                  <p className="about-card-text">
                    When I’m not building things, you’ll find me playing basketball, training at the gym, reading to expand my perspective,
                    or picking up the guitar. I also enjoy photography and creating content, capturing moments,
                    telling stories, and expressing ideas visually.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Ticker */}
        <div className="tech-stack">
          <div className="tech-stack-content">
            <h3 className="tech-stack-title">Tech Stack</h3>
            <div className="tech-ticker">
              <div className="tech-ticker-track">
                <span className="tech-item">React</span>
                <span className="tech-item">TypeScript</span>
                <span className="tech-item">JavaScript</span>
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Next.js</span>
                <span className="tech-item">Python</span>
                <span className="tech-item">HTML5</span>
                <span className="tech-item">CSS3</span>
                <span className="tech-item">Git</span>
                <span className="tech-item">Prisma</span>
                <span className="tech-item">MongoDB</span>
                <span className="tech-item">Express</span>
                <span className="tech-item">SQL</span>
                <span className="tech-item">REST APIs</span>
                <span className="tech-item">Vite</span>
                <span className="tech-item">Tailwind CSS</span>
                {/* Duplicate for seamless loop */}
                <span className="tech-item">React</span>
                <span className="tech-item">TypeScript</span>
                <span className="tech-item">JavaScript</span>
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Next.js</span>
                <span className="tech-item">Python</span>
                <span className="tech-item">HTML5</span>
                <span className="tech-item">CSS3</span>
                <span className="tech-item">Git</span>
                <span className="tech-item">Prisma</span>
                <span className="tech-item">MongoDB</span>
                <span className="tech-item">Express</span>
                <span className="tech-item">SQL</span>
                <span className="tech-item">REST APIs</span>
                <span className="tech-item">Vite</span>
                <span className="tech-item">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="projects">
          <div className="projects-content">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-grid">
              <div className="project-window">
                <div className="window-titlebar">
                  <div className="window-controls">
                    <div className="window-dot close"></div>
                    <div className="window-dot minimize"></div>
                  </div>
                  <div className="window-title">syncly.html</div>
                </div>
                <div className="project-preview">
                  <img src={synclyImage} alt="Syncly" className="project-image" />
                </div>
                <div className="project-info">
                  <h3 className="project-name">Syncly</h3>
                  <p className="project-desc">
                    A collaborative, real-time project management platform built to keep teams connected, updated, and productive.
                  </p>
                  <button className="project-button" onClick={() => window.open('https://github.com/kush11-m/Syncly', '_blank')}>View project</button>
                </div>
              </div>

              <div className="project-window">
                <div className="window-titlebar">
                  <div className="window-controls">
                    <div className="window-dot close"></div>
                    <div className="window-dot minimize"></div>
                  </div>
                  <div className="window-title">mechro.html</div>
                </div>
                <div className="project-preview">
                  <img src={mechroImage} alt="Mechro" className="project-image" />
                </div>
                <div className="project-info">
                  <h3 className="project-name">Mechro</h3>
                  <p className="project-desc">
                    A futuristic landing page for a robotics company showcasing modular robotic arms with sleek UI animations and real-time 3D model viewer.
                  </p>
                  <button className="project-button" onClick={() => window.open('https://github.com/kush11-m/Mechro', '_blank')}>View project</button>
                </div>
              </div>

              <div className="project-window">
                <div className="window-titlebar">
                  <div className="window-controls">
                    <div className="window-dot close"></div>
                    <div className="window-dot minimize"></div>
                  </div>
                  <div className="window-title">cozycam.html</div>
                </div>
                <div className="project-preview">
                  <img src={cozycamImage} alt="CozyCam" className="project-image" />
                </div>
                <div className="project-info">
                  <h3 className="project-name">CozyCam</h3>
                  <p className="project-desc">
                    Instant Polaroid collage to share! Create fun photobooth-style memories directly in your browser without downloads.
                  </p>
                  <button className="project-button" onClick={() => window.open('https://github.com/kush11-m/CozyCam', '_blank')}>View project</button>
                </div>
              </div>
            </div>

            <div className="projects-github">
              <button className="github-button" onClick={() => window.open('https://github.com/kush11-m', '_blank')}>
                View More Projects on GitHub
              </button>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="contact">
          <div className="contact-content">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-subtitle">Have a project in mind or just want to say hi? Drop me a message!</p>

            <div className="contact-grid">
              <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" className="form-input" placeholder="Your name" required />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-input" placeholder="your@email.com" required />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea name="message" className="form-textarea" rows={6} placeholder="Tell me about your project..." required></textarea>
                  </div>

                  <button type="submit" className="form-button">Send Message</button>
                </form>
              </div>

              <div className="contact-info">
                <div className="contact-card">
                  <div className="contact-icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="6" y="10" width="28" height="20" rx="2" />
                      <path d="M6 12 L20 22 L34 12" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="contact-method-title">Email</h3>
                    <a href="mailto:kushagra.work11@gmail.com" className="contact-method-link">kushagra.work11@gmail.com</a>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="10" y="10" width="20" height="20" rx="5" />
                      <circle cx="20" cy="20" r="5" />
                      <circle cx="26" cy="14" r="1" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="contact-method-title">Instagram</h3>
                    <a href="https://www.instagram.com/kushagrraa/" target="_blank" rel="noopener noreferrer" className="contact-method-link">@kushagrraa</a>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="20" cy="20" r="14" />
                      <path d="M20 14 L20 26 M14 20 L26 20" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="contact-method-title">GitHub</h3>
                    <a href="https://github.com/kush11-m" target="_blank" rel="noopener noreferrer" className="contact-method-link">github.com/kush11-m</a>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="8" y="12" width="24" height="16" rx="2" />
                      <path d="M8 16 L32 16" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="contact-method-title">LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/kushm11/" target="_blank" rel="noopener noreferrer" className="contact-method-link">linkedin.com/in/kushm11</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footer-text">© 2025 Kushagra Maheshwari</div>
        </div>
      </div>

      {/* Thank You Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon">✓</div>
            <h2 className="modal-title">Thank You!</h2>
            <p className="modal-text">Your message has been sent successfully. I'll get back to you soon!</p>
            <div className="modal-timer">Closing in 5 seconds...</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
