import React from 'react';

const ContactSupportSection = () => (
  <section className="py-12">
    <div>
      <h3 className="text-3xl font-bold text-center mb-6 dark:text-white">Contact & Support</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        <div>
          <p>If you have any questions or need assistance, our support team is here to help!</p>
          <p>Email: support@musicsamplestore.com</p>
        </div>
        <div>
          {/* Support resources and live chat link will be added here */}
        </div>
      </div>
    </div>
  </section>
);

export default ContactSupportSection;