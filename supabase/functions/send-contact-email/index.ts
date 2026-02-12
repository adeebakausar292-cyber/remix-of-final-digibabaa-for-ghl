import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  phone: string;
  smsConsent: boolean;
  marketingConsent: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();

    const emailHtml = `
      <h1>New Contact Form Submission</h1>
      <h2>Contact Information</h2>
      <ul>
        <li><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</li>
        <li><strong>Business:</strong> ${formData.businessName}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
        <li><strong>Phone:</strong> ${formData.phone}</li>
      </ul>
      <h2>SMS Consent</h2>
      <ul>
        <li><strong>Service SMS Consent:</strong> ${formData.smsConsent ? "Yes" : "No"}</li>
        <li><strong>Marketing SMS Consent:</strong> ${formData.marketingConsent ? "Yes" : "No"}</li>
      </ul>
      <hr>
      <p><em>Submitted from the DIGIBABAA LLC contact form.</em></p>
    `;

    const emailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["akbarhayat228@gmail.com"],
      subject: `New Contact from ${formData.firstName} ${formData.lastName}`,
      html: emailHtml,
    });

    console.log("Contact email sent:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
