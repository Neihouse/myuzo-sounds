import React from 'react';

const USPSection = () => (
  <section className="bg-gray-100 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div>
      <h3 className="text-3xl font-bold text-center mb-6 dark:text-white">Why Choose Us</h3>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h4 className="text-xl font-semibold mb-2">Diverse Library</h4>
          <p>Thousands of Samples Across All Genres</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Top-Quality Sounds</h4>
          <p>Curated for the Best Audio Experience</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Regular Updates</h4>
          <p>Fresh Sounds Added Weekly</p>
        </div>
      </div>
    </div>
  </section>
);

export default USPSection;