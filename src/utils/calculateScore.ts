import { EnneagramType } from "@/types/enneagram";
import { questions } from "@/data/questions";

export const calculateResults = (
  answers: Record<number, boolean>
): Record<EnneagramType, number> => {
  const initialScores: Record<EnneagramType, number> = Object.values(
    EnneagramType
  )
    .filter((value): value is EnneagramType => typeof value === "number")
    .reduce(
      (acc, type) => ({
        ...acc,
        [type]: 0,
      }),
      {} as Record<EnneagramType, number>
    );

  questions.forEach((question) => {
    const answer = answers[question.id];

    if (answer) {
      question.type.forEach((type, index) => {
        initialScores[type] += Math.max(3 - index, 0) * 2;
      });
    } else {
      if (question.negativeType) {
        question.negativeType.forEach((type, index) => {
          initialScores[type] += Math.max(2 - index, 0) * 1.5;
        });
      }
      question.type.forEach((type) => {
        initialScores[type] = Math.max(0, initialScores[type] - 1);
      });
    }
  });

  Object.keys(initialScores).forEach((type) => {
    const numType = Number(type) as EnneagramType;
    initialScores[numType] = Number(
      Math.max(0, initialScores[numType]).toFixed(2)
    );
  });

  return initialScores;
};
