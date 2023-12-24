import React from 'react';
import { GetServerSideProps } from 'next';
import SampleList from '../components/SampleList';
import { retrieveMusicSamples } from '../utils/retrieveMusicSamples';

type CategoryProps = {
  samples: Array<{
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    audioUrl: string;
  }>;
  category: string;
};

const CategoryPage: React.FC<CategoryProps> = ({ samples, category }) => {
  return (
    <div>
      <h1>{category} Samples</h1>
      {/* <SampleList samples={samples} onSampleSelect={() => {}} /> */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.query;
  const allSamples = await retrieveMusicSamples();
  const samples = allSamples.filter((sample: // TODO: Replace 'unknown' with appropriate type) => sample.category === category);
  return {
    props: { samples, category },
  };
};

export default CategoryPage;
