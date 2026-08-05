import testimonials from '../data/testimonials.json';
import media from '../data/media.json';
import Section from '../components/common/Section.jsx';
import Card from '../components/common/Card.jsx';
import MediaRenderer from '../components/common/MediaRenderer.jsx';

export default function TestimonialsSection() {
  if (!testimonials.isEnabled) return null;

  const hasItems = testimonials.items && testimonials.items.length > 0;

  return (
    <Section id="testimonials" title={testimonials.sectionTitle} subtitle={testimonials.sectionSubtitle}>
      {hasItems ? (
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.items.map((item) => (
            <Card key={item.id} as="figure">
              <div className="mb-4 flex items-center gap-3">
                <MediaRenderer
                  media={media.testimonialAvatarFallback}
                  emojiClassName="flex h-10 w-10 items-center justify-center rounded-full bg-background text-xl"
                />
                <div>
                  <figcaption className="text-sm font-semibold text-primary">{item.name}</figcaption>
                  <p className="text-xs text-text-secondary">{item.caseType}</p>
                </div>
              </div>
              <blockquote className="text-sm leading-7 text-text-secondary">
                <p>{item.content}</p>
              </blockquote>
            </Card>
          ))}
        </div>
      ) : (
        <div className="rounded-theme border border-dashed border-border bg-surface p-10 text-center text-text-secondary">
          نظری برای نمایش موجود نیست.
        </div>
      )}
    </Section>
  );
}
