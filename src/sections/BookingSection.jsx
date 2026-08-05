import booking from '../data/booking.json';
import Section from '../components/common/Section.jsx';
import Card from '../components/common/Card.jsx';
import BookingForm from '../components/forms/BookingForm.jsx';

export default function BookingSection() {
  const { settings } = booking;

  return (
    <Section id="booking" title={booking.sectionTitle} subtitle={booking.sectionSubtitle}>
      <div className="grid gap-8 md:grid-cols-3">
        <Card className="md:col-span-1">
          <h3 className="mb-3 font-heading text-base font-bold text-primary">اطلاعات جلسه</h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>مدت جلسه: {settings.sessionDurationMinutes} دقیقه</li>
            <li>روزهای کاری: {settings.workingDays}</li>
            <li>بازه زمانی: {settings.workingHours}</li>
            <li>{settings.feeNotice}</li>
            <li>{settings.finalConfirmationNotice}</li>
          </ul>
        </Card>

        <Card className="md:col-span-2">
          <BookingForm />
        </Card>
      </div>
    </Section>
  );
}
