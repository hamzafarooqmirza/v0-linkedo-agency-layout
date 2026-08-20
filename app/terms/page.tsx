import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"

export const metadata = {
  title: "Terms of Service | Linkedo",
  description: "The terms and conditions governing your use of Linkedo services.",
  alternates: { canonical: "/terms" },
}

export default function TermsOfServicePage() {
  return (
    <MainShell>
      <Section
        eyebrow="Legal"
        title="Terms of Service"
        description="The terms and conditions governing your use of our services."
        className="mb-12"
      />

      <div className="max-w-4xl mx-auto prose prose-invert">
        <div className="text-sm text-muted-foreground mb-8">Last updated: January 2025</div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using Linkedo's services, you accept and agree to be bound by the terms and
              provisions of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Linkedo provides digital marketing and web development services, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Website development and design</li>
              <li>Search engine optimization (SEO)</li>
              <li>Google Ads management</li>
              <li>Social media marketing</li>
              <li>Web application development</li>
              <li>Consulting and strategy services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Client Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">As a client, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Provide accurate and complete information</li>
              <li>Respond to requests for information in a timely manner</li>
              <li>Review and approve deliverables within agreed timeframes</li>
              <li>Make timely payments for services rendered</li>
              <li>Maintain confidentiality of account credentials</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Payment terms will be specified in individual service agreements. Generally, payment is due within 14 days
              of invoice date unless otherwise agreed. Late payments may incur interest charges and may result in
              suspension of services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              Upon full payment, you will own the final deliverables created specifically for you. Linkedo
              retains the right to use completed work for portfolio and marketing purposes unless otherwise agreed in
              writing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed">
              Both parties agree to maintain the confidentiality of any proprietary information shared during the course
              of the engagement. This obligation survives the termination of services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Linkedo will not be liable for any indirect, incidental, special, or consequential damages arising
              from the use of our services. Our total liability shall not exceed the amount paid for the specific
              service giving rise to the claim.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              Either party may terminate services with written notice as specified in the service agreement. Upon
              termination, payment is due for all work completed and expenses incurred up to the termination date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of the United Kingdom, without
              regard to its conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, please contact us at:{" "}
              <a href="mailto:legal@linkedo.agency" className="text-primary hover:underline">
                legal@linkedo.agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </MainShell>
  )
}
