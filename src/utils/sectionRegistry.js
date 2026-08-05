import HeroSection from '../sections/HeroSection.jsx';
import AboutSection from '../sections/AboutSection.jsx';
import ServicesSection from '../sections/ServicesSection.jsx';
import ProcessSection from '../sections/ProcessSection.jsx';
import TestimonialsSection from '../sections/TestimonialsSection.jsx';
import BookingSection from '../sections/BookingSection.jsx';
import FaqSection from '../sections/FaqSection.jsx';
import ContactSection from '../sections/ContactSection.jsx';

/**
 * Central registry mapping a section id (from data/sections.json) to its
 * React component. App.jsx iterates sections.json order and renders each
 * enabled section through this registry, so section order/visibility is
 * fully data-driven.
 */
export const sectionRegistry = {
  hero: HeroSection,
  about: AboutSection,
  services: ServicesSection,
  process: ProcessSection,
  testimonials: TestimonialsSection,
  booking: BookingSection,
  faq: FaqSection,
  contact: ContactSection,
};
