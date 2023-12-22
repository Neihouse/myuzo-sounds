import React from 'react';
import { useRouter } from 'next/router';
import SampleDetails from '../../components/SampleDetails';
import AudioPlayer from '../../components/AudioPlayer';
import PurchaseOptions from '../../components/PurchaseOptions';
import RelatedSamples from '../../components/RelatedSamples';

export default function SamplePackPage() {
  const router = useRouter();
  const { sampleId } = router.query;

  return (
    <div>
      <SampleDetails sampleId={sampleId} />
      <AudioPlayer sampleId={sampleId} />
      <PurchaseOptions sampleId={sampleId} />
      <RelatedSamples sampleId={sampleId} />
    </div>
  );
}