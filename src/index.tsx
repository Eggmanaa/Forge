import { Hono } from 'hono'
import { renderer } from './renderer'
import { serveStatic } from 'hono/cloudflare-workers'
import { curriculumData, forgeData } from './data/curriculum'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/materials/*', serveStatic({ root: './public' }))

// Use JSX renderer
app.use(renderer)

// Homepage
app.get('/', (c) => {
  return c.render(
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-container">
            <div className="logo-section">
              <img src="/static/forge-logo.png" alt="FORGE Logo" className="logo-img" />
              <div className="logo-text">
                <h1 className="logo-title">FORGE</h1>
                <p className="logo-tagline">Forging Emotional Resilience and Relational Clarity</p>
              </div>
            </div>
            <nav className="main-nav">
              <a href="/" className="nav-link active">Home</a>
              <a href="/grade/9" className="nav-link">Grade 9</a>
              <a href="/grade/10" className="nav-link">Grade 10</a>
              <a href="/grade/11" className="nav-link">Grade 11</a>
              <a href="/grade/12" className="nav-link">Grade 12</a>
              <a href="/about" className="nav-link">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>FORGE Curriculum</h1>
          <p className="hero-subtitle">A Christ-Centered SEL & Leadership Formation Program</p>
          <p>Integrating affective neuroscience, attachment theory, and Christian Theology to foster emotional resilience, relational intelligence, and Christ-centered leadership for grades 9-12 at Bishop Diego High School.</p>
          <div style="margin-top: 2rem;">
            <a href="/grade/9" className="btn btn-primary">Explore Curriculum</a>
            <a href="/about" className="btn btn-secondary" style="margin-left: 1rem;">Learn More</a>
          </div>
        </div>
      </section>

      {/* Grade Level Overview */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Grade Level Overview</h2>
          <div className="grades-grid">
            {curriculumData.map(grade => (
              <div key={grade.grade} className="grade-card">
                <span className="grade-number">{grade.grade}</span>
                <h3 className="grade-title">{grade.title}</h3>
                <p className="grade-description">{grade.description}</p>
                <ul className="grade-lessons">
                  {grade.lessons.map(lesson => (
                    <li key={lesson.id}>{lesson.title}</li>
                  ))}
                </ul>
                <a href={`/grade/${grade.grade}`} className="btn btn-primary">View Lessons</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Program Impact</h2>
          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">🧠</div>
              <h3>Emotional Intelligence</h3>
              <p>Students develop emotional literacy and self-regulation skills that enhance academic readiness and personal well-being.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">🤝</div>
              <h3>Relational Skills</h3>
              <p>Building empathy, communication skills, and the ability to navigate relationships with understanding and compassion.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">✝️</div>
              <h3>Christ-Centered Leadership</h3>
              <p>Preparing students to become servant-leaders who can live out the Gospel in a multicultural world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 FORGE Curriculum - Bishop Diego High School</p>
          <p>A Christ-Centered SEL & Leadership Formation Program</p>
        </div>
      </footer>
    </div>
  )
})

// Grade-specific pages
app.get('/grade/:gradeNum', (c) => {
  const gradeNum = parseInt(c.req.param('gradeNum'))
  const gradeData = curriculumData.find(g => g.grade === gradeNum)
  
  if (!gradeData) {
    return c.notFound()
  }

  return c.render(
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-container">
            <div className="logo-section">
              <img src="/static/forge-logo.png" alt="FORGE Logo" className="logo-img" />
              <div className="logo-text">
                <h1 className="logo-title">FORGE</h1>
                <p className="logo-tagline">Forging Emotional Resilience and Relational Clarity</p>
              </div>
            </div>
            <nav className="main-nav">
              <a href="/" className="nav-link">Home</a>
              <a href="/grade/9" className={`nav-link ${gradeNum === 9 ? 'active' : ''}`}>Grade 9</a>
              <a href="/grade/10" className={`nav-link ${gradeNum === 10 ? 'active' : ''}`}>Grade 10</a>
              <a href="/grade/11" className={`nav-link ${gradeNum === 11 ? 'active' : ''}`}>Grade 11</a>
              <a href="/grade/12" className={`nav-link ${gradeNum === 12 ? 'active' : ''}`}>Grade 12</a>
              <a href="/about" className="nav-link">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Grade Hero */}
      <section className="hero">
        <div className="container">
          <h1>Grade {gradeData.grade} - {gradeData.title}</h1>
          <p>{gradeData.description}</p>
        </div>
      </section>

      {/* Lessons */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Course Modules</h2>
          {gradeData.lessons.map(lesson => (
            <div key={lesson.id} className="lesson-card">
              <div className="lesson-header">
                <h3 className="lesson-title">{lesson.title}</h3>
                <div className="lesson-meta">
                  <span className="casel-focus">CASEL: {lesson.caselFocus.join(', ')}</span>
                  <span className="cst-lens">CST: {lesson.cstLens}</span>
                </div>
              </div>
              
              <p className="lesson-description">{lesson.description}</p>
              
              <div style="margin-bottom: 1rem;">
                <h4>Learning Objectives:</h4>
                <ul>
                  {lesson.objectives.map((obj, index) => (
                    <li key={index}>{obj}</li>
                  ))}
                </ul>
              </div>
              
              <div style="margin-bottom: 1.5rem;">
                <h4>Key Activities:</h4>
                <ul>
                  {lesson.keyActivities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
              
              <div className="lesson-actions">
                <a href={lesson.powerpointFile} className="download-btn" download>
                  📄 Download PowerPoint
                </a>
                {lesson.audioFile && (
                  <a href={lesson.audioFile} className="download-btn audio-btn" download>
                    🎵 Download Audio
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 FORGE Curriculum - Bishop Diego High School</p>
          <p>A Christ-Centered SEL & Leadership Formation Program</p>
        </div>
      </footer>
    </div>
  )
})

// About page
app.get('/about', (c) => {
  return c.render(
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-container">
            <div className="logo-section">
              <img src="/static/forge-logo.png" alt="FORGE Logo" className="logo-img" />
              <div className="logo-text">
                <h1 className="logo-title">FORGE</h1>
                <p className="logo-tagline">Forging Emotional Resilience and Relational Clarity</p>
              </div>
            </div>
            <nav className="main-nav">
              <a href="/" className="nav-link">Home</a>
              <a href="/grade/9" className="nav-link">Grade 9</a>
              <a href="/grade/10" className="nav-link">Grade 10</a>
              <a href="/grade/11" className="nav-link">Grade 11</a>
              <a href="/grade/12" className="nav-link">Grade 12</a>
              <a href="/about" className="nav-link active">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* About Hero */}
      <section className="hero">
        <div className="container">
          <h1>About FORGE</h1>
          <p>A comprehensive Social Emotional Learning (SEL) and leadership formation curriculum for grades 9-12</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-white">
        <div className="container">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem; margin-bottom: 3rem;">
            <div>
              <h2>Mission</h2>
              <p>{forgeData.mission}</p>
            </div>
            <div>
              <h2>Vision</h2>
              <p>{forgeData.vision}</p>
            </div>
          </div>
          
          <h2>Standards Alignment</h2>
          <div className="about-grid">
            <div className="about-card">
              <h3>CASEL Framework</h3>
              <p>{forgeData.alignment.casel}</p>
            </div>
            <div className="about-card">
              <h3>NSBECS Standards</h3>
              <p>{forgeData.alignment.nsbecs}</p>
            </div>
            <div className="about-card">
              <h3>Accreditation</h3>
              <p>{forgeData.alignment.accreditation}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 FORGE Curriculum - Bishop Diego High School</p>
          <p>A Christ-Centered SEL & Leadership Formation Program</p>
        </div>
      </footer>
    </div>
  )
})

export default app