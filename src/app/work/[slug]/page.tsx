import { siteUrl } from '@/lib/site';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowIcon } from '@/components/ui';
import { studies } from '@/data/content';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return studies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = studies.find((item) => item.slug === slug);
  if (!study) return { title: 'Not found' };
  return {
    title: study.title,
    description: study.overview,
    alternates: { canonical: `${siteUrl}/work/${study.slug}/` },
    openGraph: { title: study.title, description: study.overview, type: 'article' }
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = studies.find((item) => item.slug === slug);
  if (!study) notFound();
  const index = studies.findIndex((item) => item.slug === slug);
  const next = studies[(index + 1) % studies.length];

  return (
    <main id="main" className="study-page">
      <div className="shell">
        <div className="study-breadcrumb"><Link href="/#work">← All work</Link><span> / </span><span>{study.company}</span></div>
        <header className="study-hero">
          <div className="study-meta"><span>CASE STUDY {study.index} / 05</span><span>{study.category}</span></div>
          <h1>{study.title}</h1>
          <p className="study-deck">{study.overview}</p>
          <div className="study-byline"><div><span>COMPANY</span><strong>{study.company}</strong></div><div><span>ROLE</span><strong>{study.role}</strong></div><div><span>PERIOD</span><strong>{study.year}</strong></div></div>
        </header>
      </div>
      <div className="shell"><figure className="study-visual-figure"><Image src={study.visual.src} width={1080} height={600} alt={study.visual.alt} priority /><figcaption>Conceptual illustration based on the publicly discussable workflow. Not a proprietary product screenshot or measured performance graphic.</figcaption></figure></div>
      <div className="study-metric-band"><div className="shell study-metrics">{study.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span>{metric.caveat && <small>{metric.caveat}</small>}</div>)}</div></div>
      <div className="shell study-body">
        <div className="study-chapter-nav"><span>IN THIS STORY</span>{study.sections.map((section) => <a key={section.eyebrow} href={`#${section.eyebrow.slice(0, 2)}`}>{section.eyebrow}</a>)}</div>
        <div className="study-chapters">
          {study.sections.map((section) => <section className="study-chapter" key={section.eyebrow} id={section.eyebrow.slice(0, 2)}><span className="study-eyebrow">{section.eyebrow}</span><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}
          <div className="study-perspective"><span>PRODUCT PERSPECTIVE</span><p>{study.perspective}</p></div>
          {study.link && <a className="study-external" href={study.link.href} target="_blank" rel="noopener noreferrer">{study.link.label} <ArrowIcon external /><span className="sr-only"> (opens in a new tab)</span></a>}
          <div className="study-disclaimer">This case study covers publicly discussable product work. Certain customer and implementation details are intentionally omitted.</div>
        </div>
      </div>
      <div className="shell study-next"><span>NEXT CASE STUDY</span><Link href={`/work/${next.slug}`}><strong>{next.title}</strong><ArrowIcon /></Link></div>
    </main>
  );
}
