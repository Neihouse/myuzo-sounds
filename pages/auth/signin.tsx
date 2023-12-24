import React from 'react';
import { providers, signIn } from 'next-auth/client';
import styles from '../../styles/Signin.module.css';

interface SignInProps {
  providers: Record<string, { name: string; id: string }>;
}

const SignIn: React.FC<SignInProps> = ({ providers }) => {
  return (
    <div className={styles.signinContainer}>
      <h1>Sign In</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.id} className={styles.providerContainer}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

SignIn.getInitialProps = async () => {
  return {
    providers: await providers(),
  };
};

export default SignIn;
