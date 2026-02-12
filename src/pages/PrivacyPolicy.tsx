import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy – DIGIBABAA LLC"
        description="Privacy Policy for DIGIBABAA LLC. Learn how we collect, use, and protect your personal information including SMS consent policies."
      />
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Privacy Policy – DIGIBABAA LLC</h1>
          <p className="text-muted-foreground mb-6">
            <strong>Effective Date:</strong> February 12, 2026
          </p>

          {/* What Information Is Collected */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">What Personal Information We Collect</h2>
          <p className="text-muted-foreground mb-2">
            When you submit a form on our website, we may collect the following personal information:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>First and last name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business name</li>
          </ul>

          {/* How We Use Your Information */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-muted-foreground mb-2">We use this information to:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Provide website design and digital services</li>
            <li>Send service-related updates and project communications</li>
            <li>Respond to inquiries and support requests</li>
            <li>Send promotional messages (only if you explicitly opt in)</li>
          </ul>

          {/* SMS Opt-In Details */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">SMS Opt-In Details</h2>
          <p className="text-muted-foreground mb-4">
            SMS consent is obtained through optional checkboxes on our contact form. Entering a phone number alone does <strong>not</strong> grant DIGIBABAA LLC permission to send SMS messages. You must explicitly check the relevant consent checkbox to opt in.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Types of SMS Messages</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Transactional:</strong> Account updates, reminders, and service notifications related to your project or inquiry.</li>
            <li><strong>Promotional/Marketing:</strong> Offers, promotional content, and marketing updates (only if you opt in separately).</li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-3">Frequency & Rates</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Message frequency may vary.</li>
            <li>Message & data rates may apply.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-3">Opt-Out & Help</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Reply <strong>STOP</strong> to unsubscribe from SMS messages at any time.</li>
            <li>Reply <strong>HELP</strong> for assistance or contact us at <a href="mailto:akbarhayat228@gmail.com" className="text-primary hover:underline">akbarhayat228@gmail.com</a>.</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            SMS consent is <strong>not</strong> a condition of purchase or service.
          </p>

          {/* Mobile Info Sharing Statement */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Mobile Information Sharing</h2>
          <p className="text-muted-foreground mb-6">
            DIGIBABAA LLC does <strong>not</strong> sell, rent, or share your phone number or SMS consent information with any third parties for marketing or promotional purposes. Your mobile information is only shared with our SMS service providers (e.g., Twilio) solely for the purpose of delivering the messages you have consented to receive. No other third-party access is permitted.
          </p>

          {/* Cookie & Tracking Practices */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookie &amp; Tracking Practices</h2>
          <p className="text-muted-foreground mb-4">
            Our website may use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. These may include:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Essential cookies:</strong> Required for basic website functionality.</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website (e.g., Google Analytics).</li>
            <li><strong>Marketing cookies:</strong> Used to track visitor behavior for ad targeting purposes.</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            You can manage or disable cookies through your browser settings at any time.
          </p>

          {/* Data Security and Handling */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security and Handling</h2>
          <p className="text-muted-foreground mb-6">
            We take appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encrypted data transmission (SSL/TLS), secure server infrastructure, and restricted access to personal data. However, no method of internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          {/* User Rights */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p className="text-muted-foreground mb-2">You have the right to:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Request access to the personal data we hold about you</li>
            <li>Request correction or deletion of your personal data</li>
            <li>Opt out of SMS messages at any time by replying STOP</li>
            <li>Withdraw marketing consent at any time</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            To exercise any of these rights, contact us at <a href="mailto:akbarhayat228@gmail.com" className="text-primary hover:underline">akbarhayat228@gmail.com</a>.
          </p>

          {/* Age Restriction */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Age Restriction</h2>
          <p className="text-muted-foreground mb-6">
            Our services are intended for individuals who are 18 years of age or older. We do not knowingly collect personal information from anyone under the age of 18. If you are under 18, please do not submit any personal information through our website.
          </p>

          {/* Contact Us */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            For questions about this privacy policy, contact us at:{" "}
            <a href="mailto:akbarhayat228@gmail.com" className="text-primary hover:underline">
              akbarhayat228@gmail.com
            </a>
            <br />
            DIGIBABAA LLC, 30 N Gould St Ste 47327, Sheridan, WY 82801
            <br />
            Phone: +1 (307) 225-3509
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
