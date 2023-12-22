import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

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
    title: doc.data().title,
    description: doc.data().description,
    imageUrl: doc.data().imageUrl,
    audioUrl: doc.data().audioUrl,
  }));
};