import React from 'react';
import { useRouter } from 'next/router';
import Filters from '../../components/Filters';
import SampleList from '../../components/SampleList';
import Navigation from '../../components/Navigation';

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <Navigation />
      {/* <Filters category={category} /> */}
      {/* <SampleList category={category} /> */}
    </div>
  );
}