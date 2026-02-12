import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Terms of Service – DIGIBABAA LLC"
        description="Terms of Service for DIGIBABAA LLC. Review the terms and conditions for using our website and services including SMS messaging terms."
      />
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Terms of Service – DIGIBABAA LLC</h1>
          <p className="text-muted-foreground mb-6">
            <strong>Effective Date:</strong> February 12, 2026
          </p>

          <p className="text-muted-foreground mb-6">
            By using our website and submitting your information, you agree to the following terms and conditions. Please read them carefully.
          </p>

          {/* SMS Messaging Terms */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">SMS Messaging Terms</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Description of SMS Use Cases</h3>
          <p className="text-muted-foreground mb-4">
            By opting in via our contact form checkboxes, you may receive the following types of SMS messages from DIGIBABAA LLC:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Transactional messages:</strong> Account updates, service reminders, appointment confirmations, project status notifications, and other service-related communications.</li>
            <li><strong>Marketing/Promotional messages:</strong> Special offers, promotions, new service announcements, and marketing content (only if you separately opt in to marketing SMS).</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Opt-Out Instructions</h3>
          <p className="text-muted-foreground mb-4">
            You may opt out of receiving SMS messages at any time:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Reply <strong>STOP</strong> to any SMS message to unsubscribe immediately.</li>
            <li>Reply <strong>HELP</strong> to any SMS message for assistance and support information.</li>
            <li>Contact us directly at <a href="mailto:akbarhayat228@gmail.com" className="text-primary hover:underline">akbarhayat228@gmail.com</a> or call +1 (307) 225-3509.</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            After opting out, you will receive a one-time confirmation message. No further messages will be sent unless you re-subscribe.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Message &amp; Data Rates</h3>
          <p className="text-muted-foreground mb-6">
            Message frequency may vary. Standard message and data rates may apply depending on your mobile carrier and plan. DIGIBABAA LLC is not responsible for any messaging or data charges incurred by your mobile carrier.
          </p>

          {/* Carrier Liability Disclaimer */}
          <h3 className="text-xl font-semibold mt-6 mb-3">Carrier Liability Disclaimer</h3>
          <p className="text-muted-foreground mb-6">
            DIGIBABAA LLC and mobile carriers (including but not limited to T-Mobile, AT&amp;T, Verizon, and others) are not liable for delayed or undelivered messages. Message delivery is subject to effective transmission by your mobile carrier and network conditions. Carriers are not responsible for the content of any SMS messages sent by DIGIBABAA LLC.
          </p>

          {/* Age Restriction */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Age Restriction</h2>
          <p className="text-muted-foreground mb-6">
            You must be at least 18 years of age to use our services, submit forms on our website, or opt in to SMS messaging. By using our website and providing your information, you confirm that you are 18 years of age or older.
          </p>

          {/* Consent Not Required */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Consent</h2>
          <p className="text-muted-foreground mb-6">
            Consent to receive SMS messages is <strong>not</strong> a condition of purchase or receiving any service from DIGIBABAA LLC. Both transactional and marketing SMS consent checkboxes are entirely optional.
          </p>

          {/* Privacy */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Privacy</h2>
          <p className="text-muted-foreground mb-6">
            Your privacy is important to us. Please review our{" "}
            <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>{" "}
            to understand how we collect, use, and protect your personal information, including SMS consent and mobile information sharing practices.
          </p>

          {/* Changes to Terms */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
          <p className="text-muted-foreground mb-6">
            DIGIBABAA LLC reserves the right to update these terms at any time. Continued use of the website after changes constitutes acceptance of the updated terms.
          </p>

          {/* Contact Us */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            For questions about these terms, contact us at:{" "}
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

export default TermsOfService;
