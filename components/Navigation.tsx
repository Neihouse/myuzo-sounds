import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/categories">Categories</Link>
      <Link href="/about">About</Link>
      {/* Additional navigation links will go here */}
    </nav>
  );
};

export default Navigation;
