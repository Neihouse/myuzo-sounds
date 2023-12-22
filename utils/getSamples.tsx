// Firebase config import was here, but it's commented out due to missing firebase module
// import { db } from './firebase';

export const retrieveMusicSamples = async (): Promise<Array<{
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  audioUrl: string;
}>> => {
  // This line is commented out due to missing db object
// const snapshot = await db.collection('samples').get();
const snapshot = { docs: [] as any[] }; // Mocked empty snapshot with any[] to fix type error
  return snapshot.docs.map((doc: any) => ({
    id: doc.id,
    ...doc.data() as {
      title: string;
      description: string;
      imageUrl: string;
      audioUrl: string;
    }
  }));
};
