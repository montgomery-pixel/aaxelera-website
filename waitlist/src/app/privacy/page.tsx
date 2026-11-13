import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Sections";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy policy | ${site.brand}`,
  description: `How ${site.brand} handles the information you share when you join the waitlist.`,
};

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Who we are",
    body: (
      <p>
        This website is operated by {site.legalName} (&quot;{site.brand}&quot;, &quot;we&quot;, &quot;us&quot;).{" "}
        {site.brand} is a planned home security service that is not yet available. This policy covers this waitlist
        website only. A separate policy covering the service itself, including camera video, will be published before
        launch.
      </p>
    ),
  },
  {
    title: "Information we collect",
    body: (
      <ul>
        <li>
          <strong>What you give us:</strong> your email address and, if you choose to provide them, your ZIP code and
          home type (house, apartment or townhouse).
        </li>
        <li>
          <strong>How you found us:</strong> the campaign details in the link you followed (such as UTM parameters and
          ad click identifiers), the page you arrived on, and the website that referred you.
        </li>
        <li>
          <strong>Usage and device data:</strong> our hosting, analytics and advertising providers may collect
          information such as your IP address, browser type, pages viewed and actions taken on this site, using cookies
          and similar technologies.
        </li>
      </ul>
    ),
  },
  {
    title: "How we use it",
    body: (
      <ul>
        <li>To add you to the waitlist and email you about the launch, early-bird pricing and related updates.</li>
        <li>To understand where there is demand so we can decide where to launch first.</li>
        <li>To measure which of our ads lead to waitlist signups and to improve our advertising.</li>
        <li>To keep this website secure and working properly.</li>
      </ul>
    ),
  },
  {
    title: "Cookies and advertising tools",
    body: (
      <p>
        We use advertising and measurement tools from Meta (the Meta Pixel) and Google (the Google tag). These tools
        may set cookies and receive information about your visit and whether you joined the waitlist, which helps us
        measure and improve our ads on platforms such as Facebook, Instagram and YouTube. You can limit this through
        your browser settings, your ad settings on Meta and Google, or a browser signal such as Global Privacy Control.
      </p>
    ),
  },
  {
    title: "Who we share it with",
    body: (
      <>
        <p>We do not sell your personal information for money. We share it only with:</p>
        <ul>
          <li>
            Service providers that run this website for us, such as our hosting provider, our database provider and
            our email provider.
          </li>
          <li>Advertising and analytics partners, as described in the section above.</li>
          <li>Authorities or other parties when required by law, or as part of a business transfer.</li>
        </ul>
      </>
    ),
  },
  {
    title: "How long we keep it",
    body: (
      <p>
        We keep waitlist information until the service has launched and we have contacted you, or until you ask us to
        remove it, whichever comes first, unless we need to keep it longer to meet legal obligations.
      </p>
    ),
  },
  {
    title: "Your choices and rights",
    body: (
      <p>
        You can unsubscribe from our emails at any time using the link in any email. You can also ask us to access,
        correct or delete the information we hold about you by emailing{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. Depending on where you live, you may have
        additional rights under state privacy laws, including the right to opt out of certain sharing of your
        information for advertising. We will not treat you differently for using these rights.
      </p>
    ),
  },
  {
    title: "Children",
    body: <p>This website is intended for adults in the United States. We do not knowingly collect information from children under 13.</p>,
  },
  {
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy as our plans develop. When we do, we will change the date at the top of this page.
      </p>
    ),
  },
  {
    title: "Contact us",
    body: (
      <p>
        Questions about this policy or your information? Email{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header showCta={false} />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <Link href="/" className="text-sm text-muted underline underline-offset-2 hover:text-text">
          Back to home
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-text sm:text-4xl">Privacy policy</h1>
        <p className="mt-2 text-sm text-muted">Last updated: {site.privacyLastUpdated}</p>

        {site.showPrivacyDraftNotice ? (
          <p className="mt-6 rounded-lg border border-dashed border-line bg-panel p-4 text-sm text-muted">
            Draft: this policy has not yet had legal review and may change.
          </p>
        ) : null}

        <div className="mt-8 space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-text">{section.title}</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted [&_a]:text-text [&_a]:underline [&_a]:underline-offset-2 [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-text [&_ul]:space-y-2">
                {section.body}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
