import JsonLd from '@/components/JsonLd';
import { Container, PageHero } from '@/components/ui';
import { breadcrumbSchema, graph } from '@/lib/schema';
import { site } from '@/lib/site';

// Shared shell for the Terms and Privacy pages: hero, readable prose column
// and a contact block that always points at the business email.
export default function LegalPage({
  title,
  path,
  updated,
  intro,
  children,
}: {
  title: string;
  path: string;
  updated: string;
  intro: string;
  children: React.ReactNode;
}) {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: title, path },
  ];

  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs))} />
      <PageHero breadcrumbs={crumbs} eyebrow={`Last updated ${updated}`} title={title} intro={intro} />

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-base leading-relaxed text-navy-700 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy-900 sm:[&_h2]:text-2xl [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
            {children}

            <h2>Contact us</h2>
            <p>Questions about this page? Get in touch:</p>
            <address className="mt-4 rounded-3xl bg-mist-50 p-5 not-italic ring-1 ring-mist-200 sm:p-7">
              <strong className="text-navy-900">{site.name}</strong>
              <br />
              {site.region.city}, {site.region.state} {site.region.postalCode}
              <br />
              Email:{' '}
              <a href={site.email.href} className="break-all font-semibold text-teal-700 underline-offset-4 hover:underline">
                {site.email.display}
              </a>
              <br />
              Phone:{' '}
              <a href={site.phone.href} className="font-semibold text-teal-700 underline-offset-4 hover:underline">
                {site.phone.display}
              </a>
            </address>
          </div>
        </Container>
      </section>
    </>
  );
}
