function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold text-ink-strong">{title}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold text-ink-strong">Privacy Policy of Voithos AI</h1>
        <p className="mb-8 mt-2 text-sm text-muted">Last Updated: April 1, 2026</p>

        <div className="space-y-7 leading-relaxed text-ink">
          <p>
            Welcome to Voithos AI, a product developed and operated by CleverStaff LLC
            (ТОВ «Клеверстаф»), Ukraine. Your privacy is our priority. This policy explains
            how we handle your information when you use our meeting assistant services.
          </p>

          <Section title="1. Information We Collect">
            <p>To provide our services, we collect the following types of information:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Account Data:</strong> Full name, email address, and profile picture (manually uploaded by you).</li>
              <li><strong>Meeting Content:</strong> Video recordings of meetings, automated text transcripts, and AI-generated summaries.</li>
              <li><strong>Metadata:</strong> List of meeting participants and meeting duration.</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Data">
            <p>We use your data strictly to provide the functional features of Voithos AI:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Transcripts:</strong> Used solely to generate meeting summaries.</li>
              <li><strong>Video Recordings:</strong> Made available to you for viewing and downloading within your account.</li>
              <li><strong>No Model Training:</strong> We do not use your meeting recordings, transcripts, or personal data to train AI models (including our own or third-party models).</li>
            </ul>
          </Section>

          <Section title="3. Data Storage and Retention">
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Location:</strong> All video files are stored in a secure cloud environment (Region: Warsaw, Poland).</li>
              <li><strong>Video Retention:</strong> Video recordings are automatically deleted after 365 days.</li>
              <li><strong>Text Data:</strong> Meeting summaries and transcripts are processed through our internal automated workflows and stored within our secure application database. Access to this data is strictly limited to the account owner.</li>
            </ul>
          </Section>

          <Section title="4. Third-Party Service Providers">
            <p>
              To deliver our services, we work with select infrastructure and AI partners.
              These partners are strictly prohibited from using your data for any purpose
              other than providing the specific technical functions requested by Voithos AI:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Video Interoperability Services:</strong> To connect our AI assistant to your video conferences and capture meeting data.</li>
              <li><strong>AI Processing Partners:</strong> To process anonymized text transcripts into meeting summaries (e.g., via Google Cloud&apos;s enterprise AI services).</li>
              <li><strong>Data Orchestration &amp; Hosting:</strong> To manage internal workflows and secure database hosting.</li>
            </ul>
          </Section>

          <Section title="5. Your Rights and Data Control">
            <p>You have full control over your data:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Deletion:</strong> You can manually delete any meeting record (including video, transcript, and summary) directly through the Voithos AI interface at any time.</li>
              <li><strong>Access:</strong> You can download your video recordings during the 30-day retention period.</li>
            </ul>
          </Section>

          <Section title="6. Compliance and Jurisdiction">
            <p>
              Voithos AI is a sub-product of CleverStaff LLC, a legal entity registered in
              Ukraine. This policy is governed by the laws of Ukraine and, where applicable,
              international data protection standards (such as GDPR for EU residents).
            </p>
          </Section>

          <Section title="7. Contact Us">
            <p>
              If you have any questions regarding your privacy or wish to request data removal,
              please contact our support team: support@voithos.ai
            </p>
            <p>Address: Ukraine, Kyiv.</p>
          </Section>
        </div>
      </div>
    </section>
  );
}
