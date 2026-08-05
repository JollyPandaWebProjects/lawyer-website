import contact from '../data/contact.json';
import Section from '../components/common/Section.jsx';
import Card from '../components/common/Card.jsx';
import ContactForm from '../components/forms/ContactForm.jsx';

export default function ContactSection() {
  return (
    <Section id="contact" title={contact.form.sectionTitle} subtitle={contact.form.sectionSubtitle}>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <h3 className="mb-4 font-heading text-base font-bold text-primary">اطلاعات تماس</h3>
          <ul className="space-y-3 text-sm text-text-secondary">
            <li>
              <span className="font-medium text-primary">آدرس: </span>
              {contact.address}
            </li>
            <li dir="ltr" className="text-right">
              <span className="font-medium text-primary">تلفن: </span>
              {contact.phone}
            </li>
            <li>
              <span className="font-medium text-primary">ایمیل: </span>
              {contact.email}
            </li>
            <li>
              <span className="font-medium text-primary">ساعات کاری: </span>
              {contact.workingHours.weekdays} | {contact.workingHours.thursday} | {contact.workingHours.friday}
            </li>
          </ul>
        </Card>

        <Card>
          <ContactForm />
        </Card>
      </div>
    </Section>
  );
}
