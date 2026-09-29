import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import img1 from '../imgs/img1.jpg';
import useCountUp from '../hooks/useCountUp';
import useTypewriter from '../hooks/useTypewriter';
import {
  terminalLines,
  impactStats,
  skillGroups,
  experience,
  featuredProject,
  award,
  credentials,
} from '../data/siteData';
import './home.css';

const ACCENT = '#60a5fa'; // handoff.md: configurable via --accent-1/--accent-2, default blue-400
const SHOW_GRID = true; // handoff.md: showGrid toggle for the hero grid overlay

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const MOTION_TAGS = { div: motion.div, form: motion.form, article: motion.article };

// HashRouter treats a plain href="#id" as a route change, not an in-page
// scroll, so anchors within the page must intercept the click and scroll
// manually instead of letting the hash navigate.
function scrollToSection(e, id) {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function Reveal({ children, delay = 0, className, as = 'div', ...rest }) {
  const reduceMotion = useReducedMotion();
  const Tag = typeof as === 'string' ? MOTION_TAGS[as] || motion.div : as;
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : delay, ease: 'easeOut' }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function StaggerGroup({ children, className, stagger = 0.07 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="nav-logo" onClick={(e) => scrollToSection(e, 'top')}>
        <span className="nav-logo-mark">AT</span>
        <span className="nav-logo-text">
          ameertayeh<span className="accent-text">.me</span>
        </span>
      </a>
      <nav className="nav-links">
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>/about</a>
        <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>/experience</a>
        <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>/projects</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>/contact</a>
      </nav>
      <a
        className="btn btn-ghost nav-linkedin"
        href="https://www.linkedin.com/in/ameer-tayeh"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
        <ArrowIcon />
      </a>
    </header>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  );
}

function Hero() {
  const heroRef = useRef(null);
  const inView = useInView(heroRef, { once: true });
  const reduceMotion = useReducedMotion();
  const { visibleCount, currentChars, done } = useTypewriter(terminalLines, inView);

  return (
    <section id="top" className="hero" ref={heroRef}>
      {SHOW_GRID && <div className="hero-grid" aria-hidden="true" />}
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-grid-layout">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.15, ease: 'easeOut' }}
        >
          <div className="status-line">
            <span className="status-dot" />
            Brooklyn, NY · CS @ NYIT, class of 2028
          </div>
          <h1 className="hero-title">
            Ameer
            <br />
            Tayeh<span className="accent-text">.</span>
          </h1>
          <motion.div
            className="hero-underline"
            initial={{ width: 0 }}
            animate={{ width: reduceMotion ? 220 : 220 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.5, ease: 'easeOut' }}
          />
          <p className="hero-lede">
            Backend-minded developer building at the edge of <strong>cybersecurity</strong>,{' '}
            <strong>networking</strong> and <strong>AI</strong> — from low-latency C++ systems to AI tools people
            actually use.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>
              See my work
              <ChevronIcon />
            </a>
            <a className="btn btn-ghost" href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          className="terminal-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.3, ease: 'easeOut' }}
        >
          <div className="terminal-bar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="terminal-path">ameer@nyit: ~</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="prompt">➜</span> <span className="pwd">~</span>{' '}
              <span className="cmd">whoami --verbose</span>
            </div>
            <dl className="terminal-kv">
              {terminalLines.map((line, i) => {
                if (i >= visibleCount) return null;
                const isTyping = i === visibleCount - 1 && !done;
                const value = isTyping ? line.value.slice(0, currentChars) : line.value;
                return (
                  <div className="terminal-row" key={line.key}>
                    <dt>{line.key}</dt>
                    <dd>
                      {value}
                      {isTyping && <span className="cursor" />}
                    </dd>
                  </div>
                );
              })}
            </dl>
            {done && (
              <div className="terminal-line">
                <span className="prompt">➜</span> <span className="pwd">~</span>{' '}
                <span className="cursor" />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatTile({ stat }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useCountUp(stat.value, inView);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="impact-stat"
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: reduceMotion ? 0 : 0.4, ease: 'easeOut' }}
    >
      <span className="impact-number">
        {count}
        {stat.suffix}
      </span>
      <span className="impact-caption">{stat.caption}</span>
    </motion.div>
  );
}

function ImpactStrip() {
  return (
    <section className="impact-strip">
      {impactStats.map((stat) => (
        <StatTile stat={stat} key={stat.caption} />
      ))}
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <Reveal className="about-photo">
        <img src={img1} alt="Ameer Tayeh" />
        <span className="photo-chip">
          <span className="status-dot" />
          Meta Lab · New York
        </span>
      </Reveal>
      <Reveal delay={0.08} className="about-copy">
        <span className="eyebrow">01 — about</span>
        <h2 className="section-heading">Securing systems, one packet at a time.</h2>
        <p>
          I'm a Computer Science student at the New York Institute of Technology, graduating in 2028. By day I'm on
          the ITS Help Desk at NYIT; the rest of the time I'm working toward becoming a backend developer who builds
          new approaches to cybersecurity and AI.
        </p>
        <p>
          Right now that means a cybersecurity glove powered by a Raspberry Pi 5, with AI tooling written in C++ and
          libraries like SFML.
        </p>
      </Reveal>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills">
      <Reveal className="skills-header" as="div">
        <span className="eyebrow">02 — toolkit</span>
        <span className="skills-count">
          {skillGroups.reduce((n, g) => n + g.skills.length, 0)} packages installed
        </span>
      </Reveal>
      <StaggerGroup className="skills-chips">
        {skillGroups.flatMap((group) =>
          group.skills.map((skill) => (
            <motion.span
              className="chip"
              key={skill}
              variants={{ hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <span className="chip-label">{group.label}</span>
              {skill}
            </motion.span>
          ))
        )}
      </StaggerGroup>
    </section>
  );
}

function ExperienceItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();

  return (
    <article className="timeline-item" ref={ref}>
      <div className="timeline-rail">
        <motion.span
          className={`timeline-node ${item.current ? 'timeline-node-current' : ''}`}
          initial={{ scale: 0 }}
          animate={{ scale: inView ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18, delay: reduceMotion ? 0 : 0.05 }}
        >
          {String(index + 1).padStart(2, '0')}
        </motion.span>
        {index < experience.length - 1 && (
          <span className="timeline-line-track">
            <motion.span
              className="timeline-line-fill"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: inView ? 1 : 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, ease: 'easeOut' }}
            />
          </span>
        )}
      </div>
      <Reveal className="timeline-content" as="div">
        <div className="timeline-top">
          <h3>{item.title}</h3>
          <span className={`timeline-date ${item.current ? 'timeline-date-current' : ''}`}>{item.date}</span>
        </div>
        <span className="timeline-company">{item.company}</span>
        <ul>
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </Reveal>
    </article>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience">
      <Reveal className="experience-header" as="div">
        <span className="eyebrow">03 — experience</span>
        <h2 className="section-heading">The route so far.</h2>
        <p className="mono-note">
          $ traceroute ameer.career
          <br />
          {experience.length} hops, 2024 → present
        </p>
      </Reveal>
      <div className="timeline">
        {experience.map((item, index) => (
          <ExperienceItem item={item} index={index} key={item.id} />
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <Reveal className="projects-header" as="div">
        <span className="eyebrow">04 — projects &amp; credentials</span>
        <h2 className="section-heading">Built, earned, awarded.</h2>
      </Reveal>

      <div className="bento">
        <Reveal className="bento-card bento-featured" as="article">
          <div className="bento-featured-accent" />
          <div className="bento-featured-top">
            <span className="mono-tag accent-text">{featuredProject.eyebrow}</span>
            <span className="mono-tag muted">featured project</span>
          </div>
          <h3 className="featured-title">{featuredProject.title}</h3>
          <p className="featured-description">{featuredProject.description}</p>

          <div className="pipeline">
            {featuredProject.pipeline.map((step, i) => (
              <div className="pipeline-step" key={step}>
                <span className={i === 2 ? 'pipeline-node pipeline-node-accent' : 'pipeline-node'}>{step}</span>
                {i < featuredProject.pipeline.length - 1 && (
                  <span className="pipeline-connector">
                    <span className="pipeline-dot" />
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="featured-stats">
            {featuredProject.stats.map((stat) => (
              <div className="featured-stat" key={stat.label}>
                <span className={stat.value === 'TBD' ? 'featured-stat-value muted' : 'featured-stat-value'}>
                  {stat.value}
                </span>
                <span className="featured-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="tag-row">
            {featuredProject.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="bento-card bento-award" as="article" delay={0.05}>
          <TrophyIcon />
          <div>
            <span className="mono-tag">award</span>
            <h3 className="award-title">{award.title}</h3>
            <span className="award-event">{award.event}</span>
          </div>
        </Reveal>

        {credentials.map((cred, i) => (
          <Reveal className="bento-card bento-credential" as="article" delay={0.05 + i * 0.03} key={cred.title}>
            <span className={i % 2 === 0 ? 'badge badge-cyan' : 'badge badge-blue'}>{cred.badge}</span>
            <div>
              <h3 className="credential-title">{cred.title}</h3>
              <span className="credential-status">{cred.status}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function TrophyIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 13.5L17 22l-5-3-5 3 1.5-8.5" />
    </svg>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', subject: '', message: '' });
  const [pressed, setPressed] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPressed(true);
    setTimeout(() => setPressed(false), 180);

    const email = 'atayeh55@gmail.com';
    const body = `Name: ${form.name}%0D%0A%0D%0A${form.message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(form.subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <Reveal className="contact-pitch" as="div">
        <span className="eyebrow">05 — contact</span>
        <h2 className="section-heading">
          Let's open a connection<span className="accent-text">.</span>
        </h2>
        <p>Internships, projects, or just talking shop about security and AI — my inbox is open.</p>
        <a
          className="btn btn-ghost contact-linkedin"
          href="https://www.linkedin.com/in/ameer-tayeh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
          <ArrowIcon />
        </a>
      </Reveal>

      <Reveal delay={0.08} as="form" className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-row">
          <label>
            full_name
            <input type="text" name="name" placeholder="Jane Doe" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            subject
            <input
              type="text"
              name="subject"
              placeholder="Internship opportunity"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label>
          message
          <textarea name="message" placeholder="Hi Ameer, …" value={form.message} onChange={handleChange} required />
        </label>
        <button type="submit" className={`btn btn-primary contact-submit ${pressed ? 'pressed' : ''}`}>
          Open email client →
        </button>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 Ameer Tayeh · Brooklyn, NY</span>
      <span>
        connection: <span className="accent-text">secure</span> · latency: low
      </span>
    </footer>
  );
}

function HomePage() {
  return (
    <div className="page" style={{ '--accent-1': ACCENT, '--accent-2': '#06b6d4' }}>
      <Nav />
      <Hero />
      <div className="page-content">
        <ImpactStrip />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
