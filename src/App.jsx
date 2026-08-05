import ThemeProvider from './components/layout/ThemeProvider.jsx';
import SEO from './components/seo/SEO.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import FloatingContact from './components/layout/FloatingContact.jsx';
import sections from './data/sections.json';
import { sectionRegistry } from './utils/sectionRegistry.js';

export default function App() {
  return (
    <ThemeProvider>
      <SEO />
      <Header />
      <main>
        {sections.order
          .filter((section) => section.isEnabled)
          .map((section) => {
            const SectionComponent = sectionRegistry[section.id];
            if (!SectionComponent) return null;
            return <SectionComponent key={section.id} />;
          })}
      </main>
      <Footer />
      <FloatingContact />
    </ThemeProvider>
  );
}
