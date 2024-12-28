import { Suspense } from "react";
import ResultComponent from "./ResultComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "테스트 결과",
  description: "당신의 에니어그램 유형과 성격 특성을 확인해보세요.",
  robots: {
    index: false,
  },
};

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-700 dark:text-gray-200 font-medium">
              결과를 불러오는 중이에요...
            </p>
          </div>
        </div>
      }
    >
      <ResultComponent />
    </Suspense>
  );
}
