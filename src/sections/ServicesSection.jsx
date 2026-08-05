import services from '../data/services.json';
import media from '../data/media.json';
import Section from '../components/common/Section.jsx';
import Card from '../components/common/Card.jsx';
import MediaRenderer from '../components/common/MediaRenderer.jsx';

export default function ServicesSection() {
  return (
    <Section id="services" title={services.sectionTitle} subtitle={services.sectionSubtitle}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((service) => (
          <Card key={service.id} as="article" className="text-right">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-theme bg-background">
              <MediaRenderer media={media.serviceIcons[service.iconKey]} emojiClassName="text-2xl" />
            </div>
            <h3 className="mb-2 font-heading text-lg font-bold text-primary">{service.title}</h3>
            <p className="text-sm leading-7 text-text-secondary">{service.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
