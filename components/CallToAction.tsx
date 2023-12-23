import React from 'react';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section>
      <h2>Join Our Community</h2>
      <p>Sign up and start exploring the world of music samples.</p>
      <Link href="/signup">
        Sign Up Now
      </Link>
    </section>
  );
};

export default CallToAction;
