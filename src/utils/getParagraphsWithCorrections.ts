import { Correction, Section } from "../types";

export const getParagraphsWithCorrections = (
  essay: string,
  corrections: Correction[]
) => {
  const paragraphs = essay.split("\n").filter((p) => p.trim().length > 0);

  return paragraphs.map((paragraph, index) => {
    const correctionsForParagraph = corrections.filter(
      (correction) => correction.paragraphNumber === index
    );
    if (correctionsForParagraph.length === 0) {
      return [{ text: paragraph, isCorrection: false as const }];
    }

    correctionsForParagraph.sort((a, b) => {
      return a.startIndex - b.startIndex;
    });

    const correctedParagraph = correctionsForParagraph.reduce<{
      lastIndex: number;
      sections: Section[];
    }>(
      ({ lastIndex, sections }, correction) => {
        const { startIndex, endIndex, correctedText, comment } = correction;
        const beforeCorrectionText = paragraph.slice(lastIndex, startIndex);
        const correctionText = paragraph.slice(startIndex, endIndex);
        const newSections = [
          ...sections,
          {
            text: beforeCorrectionText,
            isCorrection: false as const,
          },
          {
            text: correctionText,
            isCorrection: true as const,
            correctedText,
            comment,
            startIndex,
            endIndex,
          },
        ];

        return { lastIndex: endIndex, sections: newSections };
      },
      { lastIndex: 0, sections: [] }
    );

    const lastCorrection =
      correctionsForParagraph[correctionsForParagraph.length - 1];
    const lastSection = paragraph.slice(lastCorrection.endIndex);
    const allSections = [
      ...correctedParagraph.sections,
      {
        text: lastSection,
        isCorrection: false as const,
      },
    ];

    return allSections;
  });
};
