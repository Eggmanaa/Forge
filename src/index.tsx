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
              <a href="/about" className="nav-link">About</a>
              <a href="/grade/9" className="nav-link">Grade 9</a>
              <a href="/grade/10" className="nav-link">Grade 10</a>
              <a href="/grade/11" className="nav-link">Grade 11</a>
              <a href="/grade/12" className="nav-link">Grade 12</a>
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
              <a href="/about" className="nav-link">About</a>
              <a href="/grade/9" className={`nav-link ${gradeNum === 9 ? 'active' : ''}`}>Grade 9</a>
              <a href="/grade/10" className={`nav-link ${gradeNum === 10 ? 'active' : ''}`}>Grade 10</a>
              <a href="/grade/11" className={`nav-link ${gradeNum === 11 ? 'active' : ''}`}>Grade 11</a>
              <a href="/grade/12" className={`nav-link ${gradeNum === 12 ? 'active' : ''}`}>Grade 12</a>
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
              
              {lesson.audioFile && (
                <div className="audio-player">
                  <div className="audio-title">🎵 Audio Summary</div>
                  <audio controls preload="metadata">
                    <source src={lesson.audioFile} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <div className="audio-controls">
                    <a href={lesson.audioFile} className="download-btn audio-btn" download>
                      Download Audio
                    </a>
                  </div>
                </div>
              )}
              
              <div className="lesson-actions">
                {lesson.powerpointFile.endsWith('.txt') ? (
                  <a href={lesson.powerpointFile} className="download-btn access-note-btn" download>
                    📋 Access Information
                  </a>
                ) : (
                  <a href={lesson.powerpointFile} className="download-btn" download>
                    📄 Download PowerPoint
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
              <a href="/about" className="nav-link active">About</a>
              <a href="/grade/9" className="nav-link">Grade 9</a>
              <a href="/grade/10" className="nav-link">Grade 10</a>
              <a href="/grade/11" className="nav-link">Grade 11</a>
              <a href="/grade/12" className="nav-link">Grade 12</a>
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

      {/* Program Overview */}
      <section className="section section-white">
        <div className="container">
          <h2>Program Overview</h2>
          <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem;">{forgeData.overview}</p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem; margin-bottom: 3rem;">
            <div>
              <h3>Mission</h3>
              <p>{forgeData.mission}</p>
            </div>
            <div>
              <h3>Vision</h3>
              <p>{forgeData.vision}</p>
            </div>
          </div>
          
          <div style="background-color: var(--forge-cream); padding: 2rem; border-radius: var(--border-radius-large); border-left: 4px solid var(--primary-color); margin: 2rem 0;">
            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Catholic Foundation</h3>
            <p>{forgeData.catholicFoundation}</p>
          </div>
        </div>
      </section>

      {/* Delivery Model */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Delivery Model</h2>
          <div style="background-color: var(--background-white); padding: 2.5rem; border-radius: var(--border-radius-large); box-shadow: var(--box-shadow);">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
              <div>
                <h4 style="color: var(--primary-color); margin-bottom: 0.5rem; font-size: 1.1rem;">🎯 Target Audience</h4>
                <p style="margin: 0; font-weight: 500;">{forgeData.deliveryModel.targetAudience}</p>
              </div>
              <div>
                <h4 style="color: var(--primary-color); margin-bottom: 0.5rem; font-size: 1.1rem;">📅 Frequency</h4>
                <p style="margin: 0; font-weight: 500;">{forgeData.deliveryModel.frequency}</p>
              </div>
              <div>
                <h4 style="color: var(--primary-color); margin-bottom: 0.5rem; font-size: 1.1rem;">🏫 Setting</h4>
                <p style="margin: 0; font-weight: 500;">{forgeData.deliveryModel.setting}</p>
              </div>
              <div>
                <h4 style="color: var(--primary-color); margin-bottom: 0.5rem; font-size: 1.1rem;">👥 Facilitator</h4>
                <p style="margin: 0; font-weight: 500;">{forgeData.deliveryModel.facilitator}</p>
              </div>
            </div>
            <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
              <h4 style="color: var(--primary-color); margin-bottom: 1rem; font-size: 1.1rem;">🎭 Format</h4>
              <p style="margin: 0; font-size: 1.05rem; line-height: 1.6;">{forgeData.deliveryModel.format}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Alignment */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Mission & Standards Alignment</h2>
          <div className="about-grid">
            <div className="about-card">
              <h3>{forgeData.alignment.casel.title}</h3>
              <p>{forgeData.alignment.casel.description}</p>
            </div>
            <div className="about-card">
              <h3>{forgeData.alignment.nsbecs.title}</h3>
              <p>{forgeData.alignment.nsbecs.description}</p>
            </div>
            <div className="about-card">
              <h3>{forgeData.alignment.accreditation.title}</h3>
              <p>{forgeData.alignment.accreditation.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Scope & Sequence */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Curricular Scope & Sequence</h2>
          <p style="text-align: center; margin-bottom: 3rem; font-style: italic;">The following framework outlines the year-over-year progression of the FORGE curriculum:</p>
          
          <div style="overflow-x: auto; margin: 2rem 0;">
            <table style="width: 100%; border-collapse: collapse; background-color: var(--background-white); border-radius: var(--border-radius); overflow: hidden; box-shadow: var(--box-shadow);">
              <thead>
                <tr style="background-color: var(--primary-color); color: var(--text-light);">
                  <th style="padding: 1rem; text-align: left; font-weight: bold;">Grade</th>
                  <th style="padding: 1rem; text-align: left; font-weight: bold;">Module Title</th>
                  <th style="padding: 1rem; text-align: left; font-weight: bold;">Description</th>
                  <th style="padding: 1rem; text-align: left; font-weight: bold;">CASEL Focus</th>
                  <th style="padding: 1rem; text-align: left; font-weight: bold;">CST Lens</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 1rem; font-weight: bold; color: var(--primary-color); vertical-align: top;">9</td>
                  <td style="padding: 1rem; vertical-align: top;"><strong>Living Life in Color</strong></td>
                  <td style="padding: 1rem; vertical-align: top;">Introduces the foundational concept that emotions are non-judgmental signals that lead to adaptive actions. Students learn to identify core emotions (anger, sadness, fear, joy), their corresponding signals, and their functions using the Zones of Regulation framework.</td>
                  <td style="padding: 1rem; vertical-align: top;">Self-Awareness, Self-Management</td>
                  <td style="padding: 1rem; vertical-align: top;">Dignity of the Human Person</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color); background-color: var(--forge-cream);">
                  <td style="padding: 1rem; vertical-align: top;"></td>
                  <td style="padding: 1rem; vertical-align: top;"><strong>The Time-Traveling Emotional Brain</strong></td>
                  <td style="padding: 1rem; vertical-align: top;">Explains how the emotional brain connects present sensory experiences to the past, creating emotional "triggers". Students explore the concepts of being "flooded" by past emotions and how unresolved "core memories" can impact present behavior and well-being.</td>
                  <td style="padding: 1rem; vertical-align: top;">Self-Awareness, Social Awareness</td>
                  <td style="padding: 1rem; vertical-align: top;">Healing Community</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 1rem; font-weight: bold; color: var(--primary-color); vertical-align: top;">10</td>
                  <td style="padding: 1rem; vertical-align: top;"><strong>Understanding and Managing Anxiety</strong></td>
                  <td style="padding: 1rem; vertical-align: top;">Provides psychoeducation on anxiety, distinguishing it from fear and stress. Students identify the physical sensations of anxiety, learn about the anxiety cycle and safety behaviors, and practice "Palm Tree Coping" skills to respond to triggers without avoidance.</td>
                  <td style="padding: 1rem; vertical-align: top;">Self-Management, Responsible Decision-Making</td>
                  <td style="padding: 1rem; vertical-align: top;">Option for the Vulnerable</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color); background-color: var(--forge-cream);">
                  <td style="padding: 1rem; vertical-align: top;"></td>
                  <td style="padding: 1rem; vertical-align: top;"><strong>Verbal Villains & Empathy</strong></td>
                  <td style="padding: 1rem; vertical-align: top;">Equips students to recognize and replace communication patterns that block empathy ("Verbal Villains"). The module introduces and practices the "1, 2, 3's of Empathy"—Mirroring, Validation, and Empathy—to foster deeper connection and understanding.</td>
                  <td style="padding: 1rem; vertical-align: top;">Social Awareness, Relationship Skills</td>
                  <td style="padding: 1rem; vertical-align: top;">Call to Community</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 1rem; font-weight: bold; color: var(--primary-color); vertical-align: top;">11</td>
                  <td style="padding: 1rem; vertical-align: top;"><strong>Relating Through Differences</strong></td>
                  <td style="padding: 1rem; vertical-align: top;">Explores the 7 Motivational Gifts of the Father framework as a tool for understanding personal communication styles. Grounded in Romans 12:6-8, this session helps students identify their own personality-based gifts (Prophecy, Service, Teaching, Encouragement, Giving, Leadership, and Mercy) and learn to bridge communication gaps with others.</td>
                  <td style="padding: 1rem; vertical-align: top;">Social Awareness, Responsible Decision-Making</td>
                  <td style="padding: 1rem; vertical-align: top;">Solidarity</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color); background-color: var(--forge-cream);">
                  <td style="padding: 1rem; vertical-align: top;"></td>
                  <td style="padding: 1rem; vertical-align: top;"><strong>9 Temperaments</strong></td>
                  <td style="padding: 1rem; vertical-align: top;">Explains the nine dimensions of temperament as the "how" of personality—our natural way of reacting to environmental stimuli. Students identify their unique temperament profile to better understand their internal reactions.</td>
                  <td style="padding: 1rem; vertical-align: top;">Self-Awareness, Responsible Decision-Making</td>
                  <td style="padding: 1rem; vertical-align: top;">Subsidiarity</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 1rem; font-weight: bold; color: var(--primary-color); vertical-align: top;">12</td>
                  <td style="padding: 1rem; vertical-align: top;"><strong>Healthy Character I: Boundaries</strong></td>
                  <td style="padding: 1rem; vertical-align: top;">Defines character as the capacity to face reality and introduces the Character Structure of Separation—the ability to be distinct from others and say "no". Students learn to establish healthy boundaries by taking responsibility for their own emotions, choices, and limits.</td>
                  <td style="padding: 1rem; vertical-align: top;">Relationship Skills, Responsible Decision-Making</td>
                  <td style="padding: 1rem; vertical-align: top;">Rights & Responsibilities</td>
                </tr>
                <tr style="background-color: var(--forge-cream);">
                  <td style="padding: 1rem; vertical-align: top;"></td>
                  <td style="padding: 1rem; vertical-align: top;"><strong>Healthy Character II: Facing Reality</strong></td>
                  <td style="padding: 1rem; vertical-align: top;">Focuses on the Character Structure of Integration—the ability to embrace both positive and negative realities about oneself and life. This module teaches students to move beyond an "all-or-nothing" mindset by integrating painful and redemptive experiences with hope and self-compassion.</td>
                  <td style="padding: 1rem; vertical-align: top;">Self-Management, Social Awareness</td>
                  <td style="padding: 1rem; vertical-align: top;">Hope & Redemption</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Program Impact</h2>
          <div style="background-color: var(--background-white); padding: 2.5rem; border-radius: var(--border-radius-large); box-shadow: var(--box-shadow); text-align: center;">
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 0;">{forgeData.programImpact}</p>
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