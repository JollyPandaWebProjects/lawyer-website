import person from '../data/person.json';
import media from '../data/media.json';
import Section from '../components/common/Section.jsx';
import MediaRenderer from '../components/common/MediaRenderer.jsx';

export default function AboutSection() {
  return (
    <Section id="about" title="درباره من">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div className="order-2 mx-auto w-full max-w-sm overflow-hidden rounded-theme shadow-theme md:order-1">
          <MediaRenderer media={media.aboutImage} className="h-full w-full object-cover" emojiClassName="text-8xl" />
        </div>

        <div className="order-1 md:order-2">
          {person.about.map((paragraph, idx) => (
            <p key={idx} className="mb-4 leading-8 text-text-secondary">
              {paragraph}
            </p>
          ))}

          <p className="mb-6 inline-block rounded-theme border border-border bg-surface px-4 py-2 text-sm font-medium text-primary">
            {person.experienceLabel}
          </p>

          <h3 className="mb-4 font-heading text-lg font-bold text-primary">حوزه‌های تخصصی</h3>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {person.skills.map((skill) => (
              <li key={skill.id} className="flex items-center gap-2 text-sm text-text-secondary">
                <span aria-hidden="true" className="text-accent">
                  ●
                </span>
                {skill.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
