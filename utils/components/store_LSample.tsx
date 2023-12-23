import { db } from './firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { uploadToCloudStorage } from './cloudStorage';

export const storeSample = async (formData: any): Promise<{ sampleId: string }> => {
  const { file, title, description } = formData;
  const audioUrl = await uploadToCloudStorage(file, `${title}.mp3`);
  const sampleDoc = await addDoc(collection(db, 'samples'), {
    title,
    description,
    audioUrl,
  });
  return { sampleId: sampleDoc.id };
};
