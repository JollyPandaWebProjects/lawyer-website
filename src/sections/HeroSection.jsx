import person from '../data/person.json';
import media from '../data/media.json';
import navigation from '../data/navigation.json';
import MediaRenderer from '../components/common/MediaRenderer.jsx';
import Button from '../components/common/Button.jsx';

export default function HeroSection() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="order-2 text-center md:order-1 md:text-right">
          <p className="mb-3 inline-block rounded-theme bg-background px-3 py-1 text-sm font-medium text-accent">
            {person.city} | {person.professionalTitle}
          </p>
          <h1 id="hero-heading" className="font-heading text-3xl font-extrabold leading-tight text-primary md:text-5xl">
            {person.fullName}
          </h1>
          <p className="mt-5 text-base leading-8 text-text-secondary md:text-lg">{person.shortBiography}</p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <Button as="a" href="#booking" variant="accent">
              درخواست مشاوره
            </Button>
            <Button as="a" href={navigation.items.find((i) => i.id === 'nav-contact')?.href || '#contact'} variant="outline">
              تماس با من
            </Button>
          </div>
        </div>

        <div className="order-1 mx-auto md:order-2">
          <div className="mx-auto flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-background bg-background shadow-theme md:h-80 md:w-80">
            <MediaRenderer
              media={media.heroPortrait}
              className="h-full w-full object-cover"
              emojiClassName="text-8xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
