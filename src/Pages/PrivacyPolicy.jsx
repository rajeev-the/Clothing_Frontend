import React from "react";
import PolicyLayout from "../Components/PolicyLayout";

export default function PrivacyPolicy() {
  const year = new Date().getFullYear();

  return (

    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-5 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="mt-1 text-sm text-gray-500">
              NIKHID SOLUTIONS PRIVATE LIMITED • Website:&nbsp;
              <a
                className="text-blue-600 underline"
                href="https://nikhidsolutions.store/"
                target="_blank"
                rel="noreferrer"
              >
                nikhidsolutions.store
              </a>
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-100"
          >
            Print
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-5xl px-5 py-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* TOC */}
          <aside className="lg:sticky lg:top-6 h-max">
            <div className="rounded-xl border bg-white p-4">
              <h2 className="text-sm font-semibold text-gray-700">Contents</h2>
              <nav className="mt-3 text-sm space-y-2">
                {[
                  ["#introduction", "Introduction"],
                  ["#collection", "Collection"],
                  ["#usage", "Usage"],
                  ["#sharing", "Sharing"],
                  ["#security", "Security Precautions"],
                  ["#deletion-retention", "Data Deletion & Retention"],
                  ["#rights", "Your Rights"],
                  ["#consent", "Consent"],
                  ["#changes", "Changes to this Policy"],
                  ["#grievance", "Grievance Officer"],
                  ["#contact", "Contact Us"],
                ].map(([href, label]) => (
                  <a key={href} href={href} className="block hover:text-blue-700">
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <article className="rounded-xl border bg-white p-6 leading-7 text-gray-800">
            {/* Introduction */}
            <section id="introduction" className="space-y-3 scroll-mt-24">
              <h2 className="text-xl font-semibold">Introduction</h2>
              <p>
                This Privacy Policy describes how{" "}
                <strong>NIKHID SOLUTIONS PRIVATE LIMITED</strong> and its
                affiliates (“we”, “us”, “our”) collect, use, share, protect, or
                otherwise process your information/personal data through our
                website{" "}
                <a
                  className="text-blue-600 underline"
                  href="https://nikhidsolutions.store/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://nikhidsolutions.store/
                </a>{" "}
                (the “Platform”). You may browse certain sections without
                registering. We do not offer services outside India; your data
                will primarily be stored and processed in India.
              </p>
              <p>
                By visiting the Platform, providing your information, or
                availing any product/service offered on it, you agree to be
                bound by the Terms of Use, this Privacy Policy, and applicable
                service/product terms. If you do not agree, please do not use
                the Platform.
              </p>
              <div className="text-sm text-gray-600">
                Registered Office: Village Begampur, Landmark: Rajiv Nagar
                (Sumit Tailor), Begumpur, North West Delhi, Delhi, India –
                110086.
              </div>
            </section>

            <hr className="my-6" />

            {/* Collection */}
            <section id="collection" className="space-y-3 scroll-mt-24">
              <h2 className="text-xl font-semibold">Collection</h2>
              <p>
                We collect personal data when you use our Platform/Services or
                interact with us. This includes (but is not limited to) name,
                date of birth, address, phone, email, ID details, or other data
                shared as proof of identity/address during registration/use.
              </p>
              <p>
                Sensitive personal data may be collected with your consent (e.g.
                bank details, card data, payment instrument info, biometric or
                physiological information) where necessary to enable features,
                and only per applicable laws. You may opt out of providing
                certain data by not using a particular feature.
              </p>
              <p>
                We may track your behaviour, preferences, and information you
                choose to provide. We also collect transaction-related data and,
                when using partner platforms via our Services, those partners
                may collect data under their own privacy policies.
              </p>
              <p className="italic text-gray-700">
                Warning: If anyone claiming to be from{" "}
                <strong>NIKHID SOLUTIONS PRIVATE LIMITED</strong> asks for
                debit/credit PIN, net-banking/mobile-banking password,{" "}
                <span className="underline">do not share</span>. Report to law
                enforcement immediately.
              </p>
            </section>

            <hr className="my-6" />

            {/* Usage */}
            <section id="usage" className="space-y-3 scroll-mt-24">
              <h2 className="text-xl font-semibold">Usage</h2>
              <p>
                We use personal data to provide and improve the Services you
                request. Where used for marketing, we provide an opt-out.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Assist sellers/partners in fulfilling orders; enhance
                  experience; resolve disputes; troubleshoot problems.
                </li>
                <li>
                  Inform you about offers, products, services, and updates;
                  customize your experience.
                </li>
                <li>
                  Detect and protect against fraud/error/crime; enforce our
                  terms; conduct research, analysis, and surveys.
                </li>
                <li>Any other use disclosed at collection time.</li>
              </ul>
              <p className="text-sm text-gray-700">
                Some features may be unavailable if required permissions are not
                granted.
              </p>
            </section>

            <hr className="my-6" />

            {/* Sharing */}
            <section id="sharing" className="space-y-3 scroll-mt-24">
              <h2 className="text-xl font-semibold">Sharing</h2>
              <p>
                We may share data within our group entities, affiliates, and
                corporate entities to provide Services/products. They may market
                to you unless you opt out.
              </p>
              <p>
                We may disclose data to third parties (sellers, logistics,
                payment providers, reward programs, gateways, marketing/ads
                partners, and service providers) to operate Services, comply
                with law, prevent/detect/mitigate fraud or illegal activities,
                and protect our rights.
              </p>
              <p>
                We may disclose data to law enforcement, rights owners, or
                others in good faith as needed to respond to legal process,
                enforce Terms/Policy, address claims, or protect rights,
                property, or safety of users/the public.
              </p>
            </section>

            <hr className="my-6" />

            {/* Security */}
            <section id="security" className="space-y-3 scroll-mt-24">
              <h2 className="text-xl font-semibold">Security Precautions</h2>
              <p>
                We adopt reasonable security practices and procedures to protect
                data against unauthorized access/disclosure/loss/misuse. While
                we use safeguards and secure servers, internet transmission
                cannot be guaranteed as completely secure. Users must protect
                their login credentials and password records.
              </p>
            </section>

            <hr className="my-6" />

            {/* Deletion & Retention */}
            <section
              id="deletion-retention"
              className="space-y-3 scroll-mt-24"
            >
              <h2 className="text-xl font-semibold">Data Deletion & Retention</h2>
              <p>
                You may delete your account via profile settings (this results
                in loss of account information). You may also contact us for
                assistance. If there are pending grievances/claims/shipments or
                services, deletion may be refused or delayed until resolution.
                After deletion, you will lose access to your account.
              </p>
              <p>
                We retain data no longer than required for the purpose collected
                or as required by law. We may retain data to prevent fraud/abuse
                or for other legitimate purposes, and keep anonymised data for
                analytics/research.
              </p>
            </section>

            <hr className="my-6" />

            {/* Rights */}
            <section id="rights" className="space-y-3 scroll-mt-24">
              <h2 className="text-xl font-semibold">Your Rights</h2>
              <p>
                You may access, rectify, and update your personal data directly
                via features provided on the Platform.
              </p>
            </section>

            <hr className="my-6" />

            {/* Consent */}
            <section id="consent" className="space-y-3 scroll-mt-24">
              <h2 className="text-xl font-semibold">Consent</h2>
              <p>
                By visiting the Platform or providing your information, you
                consent to collection, use, storage, disclosure, and processing
                per this Policy. If you share data about others, you confirm you
                have authority to do so.
              </p>
              <p>
                You consent to contact through SMS, instant messaging apps,
                calls, and/or email for the purposes in this Policy. To withdraw
                consent, write to the Grievance Officer with subject “Withdrawal
                of consent for processing personal data”. We may verify your
                request; withdrawal may affect Services that require such
                processing.
              </p>
            </section>

            <hr className="my-6" />

            {/* Changes */}
            <section id="changes" className="space-y-3 scroll-mt-24">
              <h2 className="text-xl font-semibold">Changes to this Privacy Policy</h2>
              <p>
                We may update this Policy periodically to reflect changes in
                practices, Services, or legal requirements. We may notify you as
                required by law. Please review this page regularly.
              </p>
            </section>

            <hr className="my-6" />

            {/* Grievance Officer */}
            <section id="grievance" className="space-y-3 scroll-mt-24">
              <h2 className="text-xl font-semibold">Grievance Officer</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name of the Officer
                  </label>
                  <p className="mt-1 rounded-md border bg-gray-50 p-2">
                    [Insert Name]
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Designation
                  </label>
                  <p className="mt-1 rounded-md border bg-gray-50 p-2">
                    [Insert Designation]
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Company Name & Address
                  </label>
                  <p className="mt-1 rounded-md border bg-gray-50 p-2">
                    NIKHID SOLUTIONS PRIVATE LIMITED
                    <br />
                    Village Begampur, Landmark: Rajiv Nagar (Sumit Tailor),
                    <br />
                    Begumpur, North West Delhi, Delhi, India – 110086
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <p className="mt-1 rounded-md border bg-gray-50 p-2">
                    [grievance@example.com]
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <p className="mt-1 rounded-md border bg-gray-50 p-2">
                    [+91-XXXXXXXXXX]
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Office Hours
                  </label>
                  <p className="mt-1 rounded-md border bg-gray-50 p-2">
                    Monday – Friday (09:00 – 18:00 IST)
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-6" />

            {/* Contact */}
            <section id="contact" className="space-y-3 scroll-mt-24">
              <h2 className="text-xl font-semibold">Contact Us</h2>
              <p>
                For questions about this Policy or our data practices, use the
                contact information on the Platform or write to the Grievance
                Officer above.
              </p>
            </section>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 border-t bg-white">
        <div className="mx-auto max-w-5xl px-5 py-6 text-sm text-gray-500">
          © {year} NIKHID SOLUTIONS PRIVATE LIMITED. All rights reserved.
        </div>
      </footer>
    </div>

  );
}
