import React from 'react';

const FAQSection = () => (
  <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div>
      <h3 className="text-3xl font-bold text-center mb-6 dark:text-white">Frequently Asked Questions</h3>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* FAQ items will be dynamically loaded here */}
      </div>
    </div>
  </section>
);

export default FAQSection;