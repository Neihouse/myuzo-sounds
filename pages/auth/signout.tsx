import React from 'react';
import { signOut } from 'next-auth/client';
import { useRouter } from 'next/router';

const SignOutPage: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    signOut({ callbackUrl: '/' }).then(() => {
      router.push('/');
    });
  }, [router]);

  return (
    <div>
      <p>Signing you out...</p>
    </div>
  );
};

export default SignOutPage;
