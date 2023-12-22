import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>myuzo sounds</title>
        <meta name="description" content="Explore the amazing world of audio with myuzo sounds." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Hero Section */}
        <div className="bg-deep-space-blue text-white text-center p-12">
          <h1 className="text-4xl font-bold">Welcome to myuzo sounds</h1>
          <p className="text-xl mt-4">Explore the amazing world of audio with us.</p>
          <div className="mt-8">
            <a href="#" className="bg-vibrant-cyan text-deep-space-blue px-6 py-3 rounded shadow">Learn More</a>
            <a href="#" className="ml-4 border border-vibrant-cyan text-vibrant-cyan px-6 py-3 rounded shadow">Sign Up</a>
          </div>
        </div>

        {/* Feature Section */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-off-white rounded shadow p-6">
              <div className="text-center mb-4">
                {/* Icon or Image */}
              </div>
              <h3 className="font-bold text-lg text-midnight-black">Feature One</h3>
              <p className="text-gray-600 mt-2">Description of the first feature.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-off-white rounded shadow p-6">
              <div className="text-center mb-4">
                {/* Icon or Image */}
              </div>
              <h3 className="font-bold text-lg text-midnight-black">Feature Two</h3>
              <p className="text-gray-600 mt-2">Description of the second feature.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-off-white rounded shadow p-6">
              <div className="text-center mb-4">
                {/* Icon or Image */}
              </div>
              <h3 className="font-bold text-lg text-midnight-black">Feature Three</h3>
              <p className="text-gray-600 mt-2">Description of the third feature.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-deep-space-blue">
        <a
          href="https://myuzo.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-off-white"
        >
          Powered by myuzo.ai
        </a>
      </footer>
    </div>
  );
}
