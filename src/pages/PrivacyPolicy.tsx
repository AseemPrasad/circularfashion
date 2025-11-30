import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-emerald-50">
      {/* Header */}
      <div className="bg-emerald-700 text-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-emerald-100">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8 text-gray-800 leading-relaxed">
        
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p>
            Circular Fashion Solutions respects your privacy and is committed to
            protecting any personal information you share with us. This Privacy
            Policy explains how we collect, use, and safeguard your data when you
            use our platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Personal details such as name and email (when voluntarily provided)</li>
            <li>Usage data including pages visited and interactions</li>
            <li>Technical data like browser type and device information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
          <p>
            Your information helps us improve sustainability insights, personalize
            user experience, enhance AI recommendations, and ensure platform
            security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Data Sharing & Security</h2>
          <p>
            We do not sell or rent your personal information. Data is only shared
            when legally required or necessary to deliver core services.
            Appropriate security measures are in place to protect your data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Cookies & Analytics</h2>
          <p>
            Cookies are used to enhance performance and understand platform usage.
            You may disable cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
          <p>
            You have the right to access, update, or request deletion of your
            personal data. Contact us if you wish to exercise these rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Policy Updates</h2>
          <p>
            This Privacy Policy may be updated periodically. Continued use of the
            platform indicates acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding privacy, please contact:
          </p>
          <p className="mt-2 font-medium">
            📧 info@circularfashion.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
