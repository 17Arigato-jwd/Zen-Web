import type { Metadata } from 'next';
import Img from '@/components/Img';
import ContactForm from '@/components/ContactForm';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import { globalContent } from '@/content/zen-content';

export const metadata: Metadata = {
  title: 'Contact',
  description: globalContent.joinTheJourney.body,
};

export default function ContactPage() {
  const { joinTheJourney, contact, contactImage } = globalContent;

  return (
    <div className="mx-auto max-w-6xl px-4 pt-36 sm:px-6 lg:pt-44">
      <SectionHeading
        as="h1"
        eyebrow="Get in touch"
        title={joinTheJourney.heading}
        intro={joinTheJourney.body}
        className="reveal"
      />

      <div className="mt-14 grid gap-6 pb-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <div className="flex flex-col gap-6">
          <GlassCard as="aside" className="p-8">
            <h2 className="font-display text-2xl font-semibold">
              {contact.heading}
            </h2>
            <dl className="mt-5 space-y-4 text-base/7">
              <div>
                <dt className="text-sm font-bold tracking-wide text-text-soft uppercase">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-semibold underline-offset-4 hover:underline"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold tracking-wide text-text-soft uppercase">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={contact.phoneHref}
                    className="font-semibold underline-offset-4 hover:underline"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </GlassCard>
          <GlassCard className="grow p-2 sm:p-3">
            <Img
              src={contactImage.src}
              alt={contactImage.alt}
              width={contactImage.width}
              height={contactImage.height}
              className="h-full w-full rounded-2xl object-cover"
            />
          </GlassCard>
        </div>

        <GlassCard as="section" className="p-8 sm:p-10">
          <h2 className="font-display text-2xl font-semibold">
            Send an inquiry
          </h2>
          <ContactForm />
        </GlassCard>
      </div>
    </div>
  );
}
