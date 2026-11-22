import Link from 'next/link';
import { profile } from '@/data/content';

export function ArrowIcon({ external = false }: { external?: boolean }) {
  return external ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="arrow-icon"><path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="arrow-icon"><path d="M3 10h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  );
}

export function Header() {
  return (
    <header className="site-header" id="top">
      <div className="shell nav-shell">
        <Link href="/" className="brand" aria-label="Abhilash Mishra, homepage"><span className="brand-mark" aria-hidden="true">am.</span><span className="brand-text">Abhilash Mishra<span>Product Manager</span></span></Link>
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/#expertise">Expertise</Link><Link href="/#work">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#depth">Full scope</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <a className="nav-resume" href={profile.cv} download="Abhilash-Mishra-CV.pdf">CV <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div><strong>Abhilash Mishra</strong><p>Enterprise products, thoughtfully built.</p></div>
        <div className="footer-right"><a href={`mailto:${profile.email}`}>Email</a><a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn <span className="sr-only">(opens in a new tab)</span></a><a href="#top">Back to top ↑</a></div>
      </div>
    </footer>
  );
}

export function SectionLabel({ number, title }: { number: string; title: string }) {
  return <div className="section-label"><span>{number}</span><span>{title}</span></div>;
}
