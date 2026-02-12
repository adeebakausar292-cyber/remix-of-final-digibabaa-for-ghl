import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    phone: "",
  });
  const [smsConsent, setSmsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!smsConsent) {
      toast({
        title: "SMS Consent Required",
        description: "You must agree to receive service SMS messages to submit this form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "Our team will contact you shortly regarding your inquiry.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      businessName: "",
      email: "",
      phone: "",
    });
    setSmsConsent(false);
    setMarketingConsent(false);
    setIsSubmitting(false);
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      name: "DIGIBABAA LLC",
      email: "akbarhayat228@gmail.com",
      telephone: "+13072253509",
      address: {
        "@type": "PostalAddress",
        streetAddress: "30 N Gould St Ste 47327",
        addressLocality: "Sheridan",
        addressRegion: "WY",
        postalCode: "82801",
        addressCountry: "US",
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact DIGIBABAA LLC"
        description="Send your details and our team will contact you regarding website design services and digital solutions. DIGIBABAA LLC – Sheridan, WY."
        keywords="contact DIGIBABAA, website design services, digital solutions"
        schema={contactSchema}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="bg-gradient-primary bg-clip-text text-transparent">DIGIBABAA LLC</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Send your details below and our team will contact you regarding website design services and digital solutions.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <MessageSquare className="h-6 w-6 text-primary mr-3" />
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="First name"
                      required
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Last name"
                      required
                      maxLength={100}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange("businessName", e.target.value)}
                    placeholder="Your business name"
                    required
                    maxLength={200}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                      maxLength={255}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      required
                      maxLength={20}
                    />
                  </div>
                </div>

                {/* SMS Consent - REQUIRED */}
                <div className="space-y-4 border border-border rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="smsConsent"
                      checked={smsConsent}
                      onCheckedChange={(checked) => setSmsConsent(checked === true)}
                      className="mt-1"
                      required
                    />
                    <Label htmlFor="smsConsent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      I agree to receive SMS messages from DIGIBABAA LLC regarding website design services, updates, and follow-ups. Message frequency may vary. Message &amp; data rates may apply. Reply STOP to unsubscribe or HELP for help. <span className="text-destructive">*</span>
                    </Label>
                  </div>

                  {/* Marketing Consent - OPTIONAL */}
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="marketingConsent"
                      checked={marketingConsent}
                      onCheckedChange={(checked) => setMarketingConsent(checked === true)}
                      className="mt-1"
                    />
                    <Label htmlFor="marketingConsent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      I agree to receive promotional SMS messages from DIGIBABAA LLC about offers and marketing updates. Message frequency may vary. Message &amp; data rates may apply. Reply STOP to unsubscribe or HELP for help.
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                {/* Disclosure & Policy Links */}
                <div className="text-center space-y-2">
                  <p className="text-xs text-muted-foreground">
                    Consent is not a condition of purchase. DIGIBABAA LLC does not sell or share SMS consent with third parties except messaging providers.
                  </p>
                  <div className="flex items-center justify-center gap-4 text-xs">
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    <span className="text-muted-foreground">|</span>
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
