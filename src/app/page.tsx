import Link from 'next/link';
import Image from 'next/image';
import { ArrowIcon, SectionLabel } from '@/components/ui';
import { completedCourses, development, experience, independentWork, profile, studies, supportingWork } from '@/data/content';

export default function Home() {
  return (
    <main id="main">
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-main">
          <div className="eyebrow"><span className="eyebrow-line" /> Enterprise Product Manager <span className="eyebrow-bullet">·</span> Bengaluru</div>
          <h1 id="hero-title">I make enterprise products work <em>beyond the spec sheet.</em></h1>
          <p className="hero-desc">Nine years across B2B SaaS, developer APIs, enterprise communications, and connected devices. I work through the customer constraints, technical trade-offs, and delivery details that decide whether a product really works.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Selected work <ArrowIcon /></a>
            <a className="button button-secondary" href={profile.cv} download="Abhilash-Mishra-CV.pdf">Download CV <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <aside className="hero-aside" aria-label="Professional overview">
          <div className="aside-top">BETWEEN SOFTWARE & THE FIELD <span>001 / 2026</span></div>
          <div className="hero-visual"><Image src="/visuals/hero-system.svg" width={1080} height={600} alt="Illustrative connection between APIs, enterprise workflows, connected devices and product data" priority /></div>
          <p>Product work across APIs, enterprise workflows, and the connected devices they serve.</p>
          <div className="aside-bottom"><span>9 years in product & delivery</span><span className="tiny-star" aria-hidden="true">✳</span></div>
        </aside>
      </section>

      <div className="proof-strip" aria-label="Selected work context"><div className="shell proof-inner">
        <div><strong>4,845</strong><span>Enterprise locations in scope</span></div>
        <div><strong>10M+</strong><span>Monthly API calls</span></div>
        <div><strong>20M+</strong><span>Monthly tile requests</span></div>
        <div><strong>1,200+</strong><span>Physical monitoring devices</span></div>
      </div></div>

      <section className="section work-section shell" id="work" aria-labelledby="work-title">
        <SectionLabel number="01 /" title="Selected work" />
        <div className="section-intro"><h2 id="work-title">Problems worth <em>working through.</em></h2><p>Five examples of product work — the context, my contribution, and what can be measured.</p></div>
        <div className="work-list">
          {studies.map((study) => (
            <Link className="work-item" href={`/work/${study.slug}`} key={study.slug} aria-label={`Read case study: ${study.title}`}>
              <span className="work-index">{study.index}</span>
              <div className="work-copy"><span className="work-category">{study.company} <span aria-hidden="true">/</span> {study.category}</span><h3>{study.title}</h3><p>{study.overview}</p></div>
              <div className="work-visual"><Image src={study.visual.src} width={1080} height={600} alt={study.visual.alt} /></div>
              <div className="work-right"><span>{study.metrics[0].value}</span><small>{study.metrics[0].label}</small><div className="work-arrow"><ArrowIcon /></div></div>
            </Link>
          ))}
        </div>
        <div className="supporting-work" aria-labelledby="supporting-work-title">
          <div className="supporting-work-head"><h3 id="supporting-work-title">More of the work</h3><p>Other product areas from the CV, shown with their actual scope rather than inflated case-study narratives.</p></div>
          <div className="supporting-grid">{supportingWork.map((item) => <article className="supporting-card" key={item.name}>
            <span className="supporting-tag">{item.company} / {item.scope}</span>
            <h4>{item.name}</h4>
            <p>{item.summary}</p>
            <div className="supporting-metric"><strong>{item.value}</strong><small>{item.detail}</small></div>
          </article>)}</div>
        </div>
      </section>

      <section className="section approach-section" id="about" aria-labelledby="approach-title"><div className="shell">
        <SectionLabel number="02 /" title="How I work" />
        <div className="approach-grid"><div><h2 id="approach-title">Closer to the problem.<br /><em>Clearer on the decision.</em></h2></div><div className="approach-copy"><p>I&apos;ve worked with engineers, data teams, designers, account teams, and people in the field. The best product decisions usually start by making the actual customer constraint visible.</p><p>My work spans API management and pricing, enterprise access and self-service, provisioning, data quality, and AI-supported operations. Different technologies; the same need for a clear product problem.</p><div className="capabilities"><span>Discovery & prioritization</span><span>Developer platforms</span><span>Enterprise workflows</span><span>IoT & data products</span><span>AI-assisted operations</span><span>Go-to-market planning</span></div></div></div>
      </div></section>

      <section className="section experience-section shell" id="experience" aria-labelledby="experience-title">
        <SectionLabel number="03 /" title="Experience" />
        <div className="section-intro section-intro-tight"><h2 id="experience-title">The work, <em>in context.</em></h2><p>Across enterprise software, connected devices, and data products.</p></div>
        <div className="timeline">
          {experience.map((role) => <div className="timeline-row" key={role.company}><div className="timeline-date">{role.dates}</div><div><h3>{role.company}</h3><p className="timeline-title">{role.title}</p><p className="timeline-summary">{role.summary}</p></div></div>)}
        </div>
      </section>

      <section className="section projects-section" aria-labelledby="projects-title"><div className="shell">
        <SectionLabel number="04 /" title="Independent work" />
        <div className="section-intro"><h2 id="projects-title">Ideas I&apos;ve <em>built myself.</em></h2><p>Small products and prototypes alongside my enterprise work. These are independent initiatives, not employer case studies.</p></div>
        <div className="project-grid">{independentWork.map((project, index) => <article className="project-card" key={project.name}>
          <div className="project-top"><span>0{index+1}</span><span>{project.kind}</span></div>
          <div className="project-visual"><Image src={project.visual} width={760} height={245} alt={`Illustrative conceptual workflow for ${project.name}`} /></div><h3>{project.name}</h3><p>{project.text}</p>{'href' in project ? <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">Visit product <ArrowIcon external /><span className="sr-only"> (opens in a new tab)</span></a> : <span className="project-footnote">Project overview</span>}
        </article>)}</div>
      </div></section>

      <section className="section learning-section shell" id="education" aria-labelledby="education-title">
        <SectionLabel number="05 /" title="Education & learning" />
        <div className="section-intro section-intro-tight"><h2 id="education-title">A technical foundation.<br /><em>Still learning.</em></h2><p>Formal education, documented professional development, and separately verified course completions.</p></div>
        <div className="learning-layout">
          <div className="education-card"><span className="mini-label">Education</span><span className="education-year">2016</span><h3>Bachelor of Technology</h3><p>Electronics & Instrumentation Engineering</p><div className="education-school">NIST University <span>·</span> Berhampur, Odisha</div></div>
          <div className="learning-right">
            <h3 className="learning-subheading">Professional development <span>04</span></h3>
            {development.map((item) => <div className="learning-row" key={item.title}><div><strong>{item.title}</strong><p>{item.detail}</p></div><span>{item.year}</span></div>)}
            <h3 className="learning-subheading courses-heading">Anthropic course completions <span>02</span></h3>
            <div className="courses-grid">{completedCourses.map((course) => <div className="course-card" key={course.title}><div className="course-badge"><Image src={course.visual} width={274} height={272} alt={`Original ${course.title} completion badge issued 1 November 2026`} /></div><div className="course-card-content"><span className="course-provider">{course.issuer} <span className="status-dot" aria-hidden="true" /> Completed course</span><h4>{course.title}</h4><p>{course.details}</p><span className="course-date">Completed {course.date}</span></div></div>)}</div>
            <p className="learning-footnote">Course completion badges are not presented as professional certifications. Credential verification links can be added when available.</p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="shell contact-inner">
        <div><SectionLabel number="06 /" title="Contact" /><h2 id="contact-title">Let’s talk about<br />what comes <em>next.</em></h2><p>For product management roles across enterprise platforms, developer products, AI workflows, and connected devices — or a thoughtful introduction.</p></div>
        <div className="contact-links"><a href={`mailto:${profile.email}`} className="contact-primary">Email me <ArrowIcon external /></a><a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowIcon external /><span className="sr-only"> (opens in a new tab)</span></a><a href={profile.cv} download="Abhilash-Mishra-CV.pdf">Download résumé <ArrowIcon /></a></div>
      </div></section>
    </main>
  );
}
