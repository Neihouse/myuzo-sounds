import * as Yup from 'yup';

export const sampleSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  genre: Yup.string().required('Genre is required'),
  mood: Yup.string().required('Mood is required'),
  instrument: Yup.string().required('Instrument is required'),
  bpm: Yup.number().required('BPM is required'),
  key: Yup.string().required('Key is required'),
  price: Yup.number().required('Price is required'),
  audioUrl: Yup.string().url('Must be a valid URL').required('Audio URL is required'),
  imageUrl: Yup.string().url('Must be a valid URL').required('Image URL is required'),
  // New fields from audio processing
  transcription: Yup.string().required('Transcription is required'),
  sentimentScore: Yup.number().required('Sentiment score is required'),
  keywords: Yup.array().of(Yup.string()).required('Keywords are required'),
});
