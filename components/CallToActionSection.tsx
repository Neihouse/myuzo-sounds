import React from 'react';
import Link from 'next/link';

const CallToActionSection = () => (
  <section className="bg-blue-500 text-white text-center py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h3 className="text-3xl font-bold mb-6 dark:text-white">Start Your Musical Journey Today</h3>
    <p className="mb-6 max-w-md mx-auto">Browse Our Collection and Find the Perfect Sound for Your Next Project!</p>
    <Link href="/categories">Browse Samples</Link>
  </section>
);

export default CallToActionSection;