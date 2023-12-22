export interface RuntimeError {
  code: string;
  description: string;
  component: string;
  dateEncountered: Date;
}

export interface Solution {
  description: string;
  effectivenessScore: number;
  relatedErrors: RuntimeError[];
}