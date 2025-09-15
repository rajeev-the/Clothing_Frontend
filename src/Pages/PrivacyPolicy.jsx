import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-10">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Privacy Policy
        </h1>

        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            This Privacy Policy describes how <strong>Jalwa Trading Pvt Ltd</strong> and its affiliates (“we”, “us”, “our”) collect, use, share, and protect your personal information through our website (<a href="https://jalwatrading.store/" className="text-blue-600 underline">jalwatrading.store</a>) and related services (“Platform”), and it applies to all registered and visiting users. By accessing the Platform, you consent to the practices described here and agree to our Terms of Use and all applicable Indian laws. If you do not agree, please discontinue use.
          </p>
        </section>

        {/* Information Collection */}
        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed">
            We collect personal data you provide during registration or use of our Platform, such as name, address, email, phone number, date of birth, payment details, government-issued ID, and other KYC data as required by law. Sensitive personal data may be collected with your consent. Usage data (IP address, device/browser, search queries, interaction logs) and cookies are also collected to enhance user experience, prevent fraud, and improve services.
          </p>
          <p className="text-gray-600 leading-relaxed">
            You may opt not to provide certain data, but this can restrict your access to features/services. We may combine information collected from you with information obtained from affiliates or third parties.
          </p>
        </section>

        {/* Cookies */}
        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Cookies & Tracking</h2>
          <p className="text-gray-600 leading-relaxed">
            We use cookies and similar tracking technologies to collect and store information when you visit our Platform. These help customize your experience and support analytics, advertising, and security. You can disable cookies in your browser settings, but some features may not function properly.
          </p>
        </section>

        {/* Use of Information */}
        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Use of Information</h2>
          <p className="text-gray-600 leading-relaxed">
            Your personal data is used for service provision, order processing, enabling payments, resolving disputes, fraud prevention, marketing with opt-out provisions, customer support, compliance with law, and to improve the Platform. Data may be processed and analyzed for aggregate insights and statistical measurement.
          </p>
        </section>

        {/* Sharing of Information */}
        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Sharing & Disclosure</h2>
          <p className="text-gray-600 leading-relaxed">
            We may share your information within our corporate group, with service providers, regulatory bodies (e.g., RBI, law enforcement), and as required by law, legal process, or for business transfers. Data shared with third parties is limited to what is necessary for service fulfillment, compliance, and security. We do not sell your data to unrelated third parties for marketing.
          </p>
        </section>

        {/* Data Security */}
        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Security</h2>
          <p className="text-gray-600 leading-relaxed">
            We employ industry-standard security practices to safeguard your data against unauthorized access, loss, or misuse, but no system can guarantee perfect security. You are responsible for keeping your account credentials safe.
          </p>
        </section>

        {/* User Rights */}
        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Your Rights</h2>
          <p className="text-gray-600 leading-relaxed">
            You have the right to access, update, rectify, or erase your personal information from our records. For account deletion, you can request via your profile settings or contact us directly (see below). Certain circumstances, such as unresolved grievances or legal obligations, may delay deletion.
          </p>
        </section>

        {/* Consent & Changes */}
        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Consent & Policy Updates</h2>
          <p className="text-gray-600 leading-relaxed">
            By using the Platform, you grant us consent for data collection, use, and disclosure as described herein. You may withdraw consent at any time by contacting our Grievance Officer; however, withdrawal may affect your access to services. We reserve the right to amend this Privacy Policy. Please check this page periodically for updates.
          </p>
        </section>

        {/* Links to Other Sites */}
        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Third Party Links</h2>
          <p className="text-gray-600 leading-relaxed">
            Our Platform may link to external websites. We are not responsible for their privacy practices. Please read the privacy policies of external sites before providing any personal information.
          </p>
        </section>

        {/* Contact/Grievance Officer */}
        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Contact & Grievance Redressal
          </h2>
          <p className="text-gray-600 leading-relaxed">
            For complaints, data access requests, or questions about this Policy, contact our Grievance Officer:<br/>
            <strong>Mr. Shashank Karincheti</strong><br/>
            Razorpay Software Private Limited<br/>
            No. 22, 1st Floor, SJR Cyber, Laskar - Hosur Road, Adugodi, Bangalore - 560030<br/>
            Phone: 080-46669555<br/>
            Email: <a href="mailto:dpo@razorpay.com" className="text-blue-600 underline">dpo@razorpay.com</a><br/>
            Grievances portal: <a href="https://razorpay.com/grievances/" className="text-blue-600 underline">https://razorpay.com/grievances/</a>
          </p>
          <p className="text-gray-600 leading-relaxed">
            Owner Name: Jalwa Trading Private Limited<br/>
            Signatory: OMPRAKASH<br/>
            Contact: +91 9205761797<br/>
            Email: tradersjalwa@gmail.com
          </p>
        </section>

        {/* Legal */}
        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Governing Law</h2>
          <p className="text-gray-600 leading-relaxed">
            This Privacy Policy and any disputes are governed by the laws of India. Jurisdiction for disputes lies exclusively in Bengaluru, India.
          </p>
        </section>
      </div>
    </div>
  );
}
