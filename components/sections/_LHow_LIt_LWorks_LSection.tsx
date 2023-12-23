import React from 'react';

const HowItWorksSection = () => (
  <section className="bg-gray-100 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div>
      <h3 className="text-3xl font-bold text-center mb-6 dark:text-white">How It Works</h3>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 items-center">
        <div>
          <p className="mb-4">Follow our simple step-by-step guide to find, purchase, and download the samples you need to elevate your music production.</p>
          <ol className="list-decimal list-inside">
            <li>Search for samples or browse by category.</li>
            <li>Listen to previews and select the samples you like.</li>
            <li>Purchase and download with just a few clicks.</li>
          </ol>
        </div>
        <div>
          {/* Video tutorial will be embedded here */}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;