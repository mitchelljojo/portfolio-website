import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import {
  certifications,
  education,
  experience,
  metrics,
  personalInfo,
  projects,
  skills,
} from "./data";

const navItems = ["Work", "Projects", "Experience", "Contact"];

function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <div className="fade-in" style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <nav className="top-nav" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label={`${personalInfo.displayName} home`}>
          JM
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <header id="top" className="hero">
        <img src="/floral-data-banner.png" alt="" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-copy">
            <div className="availability">
              <Sparkles size={16} aria-hidden="true" />
              <span>{personalInfo.location}</span>
            </div>
            <h1>
              <span>Jordan</span>
              <span>Mitchel</span>
            </h1>
            <p className="hero-tagline">
              <strong>Analytics Engineer</strong> bridging data, operations, and strategy to
              build reporting systems teams can trust.
            </p>
            <div className="hero-divider" aria-hidden="true" />
            <div className="hero-points" aria-label="Portfolio focus areas">
              {personalInfo.heroHighlights.map((highlight, index) => {
                const Icon = [Database, BarChart3, Sparkles][index] ?? CheckCircle2;
                return (
                  <span key={highlight}>
                    <Icon size={19} aria-hidden="true" />
                    {highlight}
                  </span>
                );
              })}
            </div>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                <span>View projects</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button secondary" href={`mailto:${personalInfo.email}`}>
                <Mail size={18} aria-hidden="true" />
                <span>Contact me</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="work" className="content-band intro-band">
          <FadeIn>
            <div className="intro-grid">
              <div>
                <SectionHeading
                  eyebrow="Profile"
                  title="Data systems that people trust"
                  description={personalInfo.summary}
                />
                <div className="role-list" aria-label="Professional roles">
                  {personalInfo.roles.map((role) => (
                    <span key={role}>{role}</span>
                  ))}
                </div>
              </div>

              <div className="metric-grid">
                {metrics.map((metric) => (
                  <div className="metric-card" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="content-band skills-band">
          <FadeIn>
            <SectionHeading
              eyebrow="Toolkit"
              title="From data model to decision"
              description="A practical stack for cleaning data, defining metrics, automating reporting, and presenting insights clearly."
            />
            <div className="skills-grid">
              {skills.map((group, index) => {
                const Icon = [Database, BarChart3, Sparkles, BriefcaseBusiness][index] ?? CheckCircle2;
                return (
                  <article className="skill-card" key={group.title}>
                    <Icon size={24} aria-hidden="true" />
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </FadeIn>
        </section>

        <section id="projects" className="content-band projects-band">
          <FadeIn>
            <SectionHeading
              eyebrow="Selected Projects"
              title="Portfolio work with business context"
              description="A few examples of analysis, segmentation, and storytelling work available on GitHub."
            />
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div>
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-impact">
                    <CheckCircle2 size={18} aria-hidden="true" />
                    <span>{project.impact}</span>
                  </div>
                  <div className="tag-row">
                    {project.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                  <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
                    Open project
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </FadeIn>
        </section>

        <section id="experience" className="content-band experience-band">
          <FadeIn>
            <SectionHeading
              eyebrow="Experience"
              title="Operations experience with analytics depth"
              description="Roles across regional quality, customer care operations, consulting, and data education."
            />
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.company}-${item.period}`}>
                  <div className="timeline-meta">
                    <span>{item.period}</span>
                    <small>{item.location}</small>
                  </div>
                  <div className="timeline-body">
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                    <ul>
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="content-band credentials-band">
          <FadeIn>
            <div className="credentials-grid">
              <div>
                <SectionHeading
                  eyebrow="Education"
                  title="Learning foundation"
                  description="Formal education and data training that support both structured analysis and clear communication."
                />
                <div className="credential-list">
                  {education.map((item) => (
                    <article key={item.degree}>
                      <span>{item.period}</span>
                      <h3>{item.degree}</h3>
                      <p className="credential-school">{item.institution}</p>
                      <p>{item.details}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeading
                  eyebrow="Certifications"
                  title="Continued practice"
                  description="Focused credentials in analytics, machine learning, SQL, marketing analytics, and BI."
                />
                <ul className="cert-list">
                  {certifications.map((certification) => (
                    <li key={certification}>
                      <CheckCircle2 size={17} aria-hidden="true" />
                      <span>{certification}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </section>

        <section id="contact" className="contact-band">
          <div className="contact-inner">
            <div>
              <span className="contact-eyebrow">Contact</span>
              <h2>Let us turn scattered reporting into something reliable.</h2>
            </div>
            <div className="contact-actions" aria-label="Contact links">
              <a href={`mailto:${personalInfo.email}`} className="contact-link">
                <Mail size={18} aria-hidden="true" />
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone.replace(/\s/g, "")}`} className="contact-link">
                <Phone size={18} aria-hidden="true" />
                {personalInfo.phone}
              </a>
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <Linkedin size={18} aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <Github size={18} aria-hidden="true" />
                GitHub
              </a>
              <span className="contact-link static">
                <MapPin size={18} aria-hidden="true" />
                {personalInfo.location}
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
