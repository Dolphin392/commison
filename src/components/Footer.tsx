import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Overview',
    content:
      'This Privacy Policy explains how Visionary Studios handles information collected through visionarystudio.net. This is a B2B outreach site — we do not sell products, process payments, or create user accounts here.',
  },
  {
    title: 'Information We Collect',
    content:
      'The only personal information we collect is what you voluntarily submit through our contact form: your name, your email address, and your message. We do not use tracking cookies or analytics.',
  },
  {
    title: 'How We Use Your Information',
    content:
      'Your information is used solely to respond to your enquiry and discuss potential partnerships. We will never send unsolicited marketing emails or share your data with third parties for marketing purposes.',
  },
  {
    title: 'How We Store Your Information',
    content:
      "Contact form submissions are received directly to our business email. We retain correspondence only for as long as it is relevant. If you'd like your data deleted, contact us and we'll action it promptly.",
  },
  {
    title: 'Your Rights',
    content:
      "You have the right to access, correct, or delete any personal data we hold about you. Email us at visionary000studios@gmail.com and we'll respond within 7 business days.",
  },
  {
    title: "Children's Privacy",
    content:
      'This site is intended for business professionals. We do not knowingly collect information from anyone under 13.',
  },
  {
    title: 'Changes to This Policy',
    content:
      'We may update this policy from time to time. Any changes will be reflected on this page with an updated date.',
  },
  {
    title: 'Contact',
    content: 'visionary000studios@gmail.com — Visionary Studios',
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-white/40 text-sm">Last updated: April 2026</p>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-cyan-500/30 via-white/10 to-transparent" />
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <h2 className="text-lg font-semibold text-cyan-400 mb-3 tracking-tight">
                {section.title}
              </h2>
              <p className="text-white/60 leading-relaxed text-sm">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-white/10">
          
            href="/"
            className="text-white/40 hover:text-cyan-300 transition-colors text-sm"
          >
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
