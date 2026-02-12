import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Terms of Service – DIGIBABAA LLC"
        description="Terms of Service for DIGIBABAA LLC. Review the terms and conditions for using our website and services."
      />
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Terms of Service – DIGIBABAA LLC</h1>

          <p className="text-muted-foreground mb-6">
            By using our website and submitting your information, you agree to receive communication from DIGIBABAA LLC regarding website design services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">SMS Messaging Terms</h2>
          <p className="text-muted-foreground mb-4">
            If you opt in to SMS messaging:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Message frequency may vary</li>
            <li>Message & data rates may apply</li>
            <li>Reply <strong>STOP</strong> to unsubscribe</li>
            <li>Reply <strong>HELP</strong> for help</li>
          </ul>

          <p className="text-muted-foreground mb-6">
            Consent to receive SMS messages is not a condition of purchase.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
          <p className="text-muted-foreground mb-6">
            DIGIBABAA LLC reserves the right to update these terms at any time. Continued use of the website after changes constitutes acceptance of the updated terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            For questions about these terms, contact us at:{" "}
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

export default TermsOfService;
