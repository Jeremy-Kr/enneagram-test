"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import { calculateResults } from "@/utils/calculateScore";

export default function TestComponent() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});

  const handleAnswer = async (answer: boolean) => {
    try {
      const newAnswers = {
        ...answers,
        [currentQuestion]: answer,
      };
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        const results = calculateResults(newAnswers);
        const encodedResults = encodeURIComponent(JSON.stringify(results));
        await router.push(`/result?scores=${encodedResults}`);
      }
    } catch (error) {
      console.error("답변 처리 중 오류 발생:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1 flex flex-col items-center p-6 pb-24">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-indigo-500 dark:bg-indigo-400 transition-all duration-300"
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
            <p className="mt-2 text-right text-sm text-gray-600 dark:text-gray-400">
              {currentQuestion + 1} / {questions.length}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 min-h-[200px] flex flex-col">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium rounded-full">
                질문 {currentQuestion + 1}
              </span>
            </div>
            <h2 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-100">
              {questions[currentQuestion].text}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              가장 자신과 비슷한 답변을 선택해주세요
            </p>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-md mx-auto p-4 grid grid-cols-2 gap-4">
          <button
            onClick={() => handleAnswer(true)}
            className="w-full py-4 px-6 bg-indigo-500 dark:bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors"
            aria-label="맞아요 선택하기"
          >
            맞아요
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className="w-full py-4 px-6 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="아니에요 선택하기"
          >
            아니에요
          </button>
        </div>
      </div>
    </div>
  );
}
