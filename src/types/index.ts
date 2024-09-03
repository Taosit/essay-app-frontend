export type Correction = {
  id: number;
  paragraphNumber: number;
  startIndex: number;
  endIndex: number;
  correctedText: string;
  comment: string;
};

export type Essay = {
  id: number;
  question: string;
  essayText: string;
  corrections: Correction[];
};

export type Section =
  | {
      text: string;
      isCorrection: false;
    }
  | {
      text: string;
      isCorrection: true;
      correctedText: string;
      comment: string;
      startIndex: number;
      endIndex: number;
    };
