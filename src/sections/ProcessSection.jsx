import process from '../data/process.json';
import Section from '../components/common/Section.jsx';

export default function ProcessSection() {
  return (
    <Section id="process" title={process.sectionTitle} subtitle={process.sectionSubtitle} tone="dark">
      <ol className="grid gap-6 md:grid-cols-4">
        {process.steps
          .slice()
          .sort((a, b) => a.order - b.order)
          .map((step) => (
            <li key={step.id} className="rounded-theme border border-primary-dark bg-primary-dark p-6">
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-accent font-heading font-bold text-surface">
                {step.order}
              </span>
              <h3 className="mb-2 font-heading text-base font-bold">{step.title}</h3>
              <p className="text-sm leading-7 text-border">{step.description}</p>
            </li>
          ))}
      </ol>
    </Section>
  );
}
