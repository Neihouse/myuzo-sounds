export type AudioProcessingResult = {
  transcription: string;
  sentimentScore: number;
  keywords: string[];
  // Additional fields can be added as per the data returned by the audio processing API
};
