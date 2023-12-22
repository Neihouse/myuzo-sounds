import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        {/* Navigation links will go here */}
        <Link href="/">Home</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/about">About</Link>
      </nav>
      <div>
        {/* Search bar will go here */}
        <input type="text" placeholder="Search samples..." />
        <button>Search</button>
      </div>
    </header>
  );
};

export default Header;
