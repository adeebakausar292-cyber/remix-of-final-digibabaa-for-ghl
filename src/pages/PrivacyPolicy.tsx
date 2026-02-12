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
            DIGIBABAA LLC collects personal information including name, email address, and phone number when submitted through our website forms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-muted-foreground mb-2">We use this information to:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Provide website design services</li>
            <li>Send service-related updates</li>
            <li>Respond to inquiries</li>
            <li>Send promotional messages (if consent is given)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">SMS Policy</h2>
          <p className="text-muted-foreground mb-4">
            If you provide your phone number and agree to receive SMS messages, you may receive service-related and/or promotional messages from DIGIBABAA LLC.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Message Types</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Service/Transactional:</strong> Updates related to website design services, follow-ups, and project communications.</li>
            <li><strong>Promotional/Marketing:</strong> Offers, marketing updates, and promotional content (only if you opt in).</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Frequency & Rates</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Message frequency may vary.</li>
            <li>Message & data rates may apply.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Opt-Out & Help</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Reply <strong>STOP</strong> to unsubscribe from SMS messages at any time.</li>
            <li>Reply <strong>HELP</strong> for assistance.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Handling</h3>
          <p className="text-muted-foreground mb-6">
            We do not sell or share your personal information or SMS consent with third parties except our messaging providers used to deliver SMS communications.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            For questions about this privacy policy, contact us at:{" "}
            <a href="mailto:akbarhayat228@gmail.com" className="text-primary hover:underline">
              akbarhayat228@gmail.com
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
