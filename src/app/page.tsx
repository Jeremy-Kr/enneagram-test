import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "에니어그램 테스트",
  description: "15개의 질문으로 알아보는 나의 에니어그램 성격 유형 테스트",
  openGraph: {
    title: "에니어그램 테스트",
    description: "15개의 질문으로 알아보는 나의 에니어그램 성격 유형 테스트",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
              에니어그램 테스트
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              15개의 질문으로 알아보는
              <br />
              나의 에니어그램 성격 유형
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              각 질문에 대해 자신과 가장 비슷한 답변을 선택해주세요.
              <br />약 3분 정도 소요됩니다.
            </p>
            <Link
              href="/test"
              className="inline-block px-8 py-4 bg-indigo-500 dark:bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors"
            >
              테스트 시작하기
            </Link>
          </div>

          <div className="pt-8 text-sm text-gray-500 dark:text-gray-400">
            <p>
              이 테스트는 간단한 성향 파악을 위한 것으로,
              <br />
              전문적인 심리 검사를 대체할 수 없습니다.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
