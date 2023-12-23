import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const retrieveMusicSamples = async (): Promise<Array<{
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  audioUrl: string;
}>> => {
  const snapshot = await getDocs(collection(db, 'samples'));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data() as {
      title: string;
      description: string;
      imageUrl: string;
      audioUrl: string;
    }
  }));
};