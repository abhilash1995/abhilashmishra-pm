import Link from 'next/link';

export default function NotFound() {
  return <main id="main" className="shell not-found"><span className="mini-label">404 / NOT FOUND</span><h1>That page isn’t here.</h1><p>The work is still on the homepage.</p><Link className="button button-primary" href="/">Back to the portfolio →</Link></main>;
}
