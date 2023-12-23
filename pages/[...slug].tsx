import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function DynamicPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <h1>Dynamic Page: {slug}</h1>
      {/* Content and server-side logic goes here */}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // Fetch data based on 'slug' from context.params
  // Replace the following line with actual data fetching logic
  const data = { content: 'This is dynamic page content.' };

  return {
    props: { data }, // will be passed to the page component as props
  };
}