import { MainShell } from "@/components/layout/main-shell"
import { Section } from "@/components/ui/section"

export const metadata = {
  title: "Privacy Policy | Linkedo Agency",
  description: "How Linkedo Agency collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPolicyPage() {
  return (
    <MainShell>
      <Section
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information."
        className="mb-12"
      />

      <div className="max-w-4xl mx-auto prose prose-invert">
        <div className="text-sm text-muted-foreground mb-8">Last updated: January 2025</div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information that you provide directly to us, including when you create an account, fill out a
              form, subscribe to our newsletter, or contact us for support.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Name and contact information (email, phone number)</li>
              <li>Company information and business details</li>
              <li>Payment and billing information</li>
              <li>Communications and correspondence</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to provide, maintain, and improve our services, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Delivering the services you request</li>
              <li>Processing transactions and sending related information</li>
              <li>Responding to your comments, questions, and requests</li>
              <li>Sending technical notices, updates, and support messages</li>
              <li>Communicating about products, services, and events</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information
              only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
              <li>With your consent or at your direction</li>
              <li>With service providers who perform services on our behalf</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights, privacy, safety, or property</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Data portability</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to collect and track information about your use of our
              services. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:privacy@linkedo.agency" className="text-primary hover:underline">
                privacy@linkedo.agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </MainShell>
  )
}
