import { Storage } from '@google-cloud/storage';

const storage = new Storage();
const bucket = storage.bucket('ecommerce-myuzo-sounds-assets');

export const uploadToCloudStorage = async (file: Buffer, filename: string): Promise<string> => {
  const blob = bucket.file(filename);
  const blobStream = blob.createWriteStream();

  return new Promise((resolve, reject) => {
    blobStream.on('error', (err) => reject(err));
    blobStream.on('finish', () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      resolve(publicUrl);
    });
    blobStream.end(file);
  });
};
