import { useState } from 'react';
import faq from '../data/faq.json';
import Section from '../components/common/Section.jsx';

export default function FaqSection() {
  const [openId, setOpenId] = useState(null);

  return (
    <Section id="faq" title={faq.sectionTitle}>
      <div className="mx-auto max-w-3xl divide-y divide-border rounded-theme border border-border bg-surface">
        {faq.items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id}>
              <h3>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-5 py-4 text-right font-medium text-primary"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span>{item.question}</span>
                  <span aria-hidden="true" className="text-accent">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
              </h3>
              {isOpen && (
                <div id={`faq-panel-${item.id}`} role="region" className="px-5 pb-5 text-sm leading-7 text-text-secondary">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
