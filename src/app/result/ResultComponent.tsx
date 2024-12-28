"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { EnneagramType, TypeScore } from "@/types/enneagram";
import { typeDescriptions } from "@/data/typeDescriptions";
import { useRouter } from "next/navigation";
import AdBanner from "@/components/AdBanner";
import { Share2 } from "lucide-react";

export default function ResultComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [scores, setScores] = useState<TypeScore[]>([]);
  const [chartHeight, setChartHeight] = useState(400);

  const validateScores = (
    data: unknown
  ): data is Record<EnneagramType, number> => {
    if (!data || typeof data !== "object") return false;

    const scores = data as Record<string, number>;
    return Object.entries(scores).every(
      ([type, score]) =>
        Object.values(EnneagramType).includes(Number(type)) && // 유효한 타입인지
        typeof score === "number" && // 점수가 숫자인지
        score >= 0 // 점수가 음수가 아닌지
    );
  };

  useEffect(() => {
    const scoresParam = searchParams.get("scores");
    if (!scoresParam) return;

    try {
      const rawScores = JSON.parse(scoresParam);
      if (!validateScores(rawScores)) {
        throw new Error("Invalid score data");
      }

      const totalScore = Object.values(rawScores).reduce(
        (sum, score) => sum + score,
        0
      );

      const processedScores: TypeScore[] = Object.entries(rawScores)
        .map(([type, score]) => ({
          type: Number(type) as EnneagramType,
          score,
          percentage: totalScore > 0 ? (score / totalScore) * 100 : 0,
        }))
        .sort((a, b) => b.score - a.score);

      setScores(processedScores);
    } catch (error) {
      console.error("결과 처리 중 오류 발생:", error);
      router.push("/test"); // 오류 발생 시 테스트 페이지로 리다이렉트
    }
  }, [searchParams, router]);

  useEffect(() => {
    const handleResize = () => {
      setChartHeight(window.innerWidth < 640 ? 300 : 400);
    };

    handleResize(); // 초기 설정
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const radarData = useMemo(
    () =>
      scores.map(({ type, percentage }) => ({
        subject: `${type}번`,
        value: percentage,
        fullMark: 100,
      })),
    [scores]
  );

  const handleShare = async () => {
    try {
      const shareUrl = `${
        window.location.origin
      }/result?scores=${searchParams.get("scores")}`;

      if (navigator.share) {
        // 모바일 네이티브 공유
        await navigator.share({
          title: "에니어그램 테스트 결과",
          text: `저는 ${primaryType.type}번 (${
            typeDescriptions[primaryType.type].title
          }) 유형입니다!`,
          url: shareUrl,
        });
      } else {
        // 클립보드 복사
        await navigator.clipboard.writeText(shareUrl);
        alert("결과 링크가 클립보드에 복사되었습니다!");
      }
    } catch (error) {
      console.error("공유 중 오류 발생:", error);
    }
  };

  if (!searchParams.get("scores")) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            잘못된 접근입니다.
          </p>
          <Link
            href="/test"
            className="px-6 py-3 bg-indigo-500 dark:bg-indigo-600 text-white rounded-lg hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors"
          >
            테스트 시작하기
          </Link>
        </div>
      </div>
    );
  }

  if (scores.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-700 dark:text-gray-200 font-medium">
            결과를 불러오는 중이에요...
          </p>
        </div>
      </div>
    );
  }

  const primaryType = scores[0];
  const secondaryType = scores[1];
  const tertiaryType = scores[2];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1 flex flex-col items-center p-6 pb-24">
        <div className="w-full max-w-2xl space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              당신의 에니어그램 분석 결과
            </h1>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 dark:bg-indigo-600 text-white rounded-lg hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors"
            >
              <Share2 size={20} />
              결과 공유하기
            </button>
            <p className="text-lg text-gray-800 dark:text-gray-100">
              주요 유형은 {primaryType.type}번 (
              {typeDescriptions[primaryType.type].title}) 이며,
              <br />
              {secondaryType.type}번과 {tertiaryType.type}번의 성향도 강하게
              나타나요.
            </p>
          </div>

          {/* 첫 번째 광고 (결과 요약 아래) */}
          <AdBanner slot="8582322353" className="mt-8 mb-4" />

          {/* 레이더 차트 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 sm:p-6">
            <h3 className="text-xl font-medium mb-4 text-center text-gray-900 dark:text-white">
              성향 분포도
            </h3>
            <div style={{ height: chartHeight }} className="w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  data={radarData}
                >
                  <PolarGrid
                    stroke="#9CA3AF"
                    strokeDasharray="3 3" // 그리드 선 스타일 개선
                  />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{
                      fill: "#6B7280",
                      fontSize: window?.innerWidth < 640 ? 12 : 14,
                    }}
                  />
                  <Radar
                    name="점수"
                    dataKey="value"
                    stroke="#6366F1"
                    fill="#6366F1"
                    fillOpacity={0.4}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 두 번째 광고 (레이더 차트 아래) */}
          <AdBanner slot="4665190276" className="my-4" />

          {/* 상세 점수 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">
              상세 점수
            </h3>
            <div className="space-y-4">
              {scores.map(({ type, percentage }) => (
                <div key={type} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-900 dark:text-white font-medium">
                      {type}번: {typeDescriptions[type].title}
                    </span>
                    <span className="text-gray-800 dark:text-gray-100">
                      {percentage.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 유형 설명 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
                주요 성향 ({primaryType.type}번) 설명
              </h3>
              <p className="text-gray-800 dark:text-gray-100">
                {typeDescriptions[primaryType.type].description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-100">
                  강점
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  {typeDescriptions[primaryType.type].strengths.map(
                    (strength, index) => (
                      <li key={index}>{strength}</li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-100">
                  성장 포인트
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  {typeDescriptions[primaryType.type].weaknesses.map(
                    (weakness, index) => (
                      <li key={index}>{weakness}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* 하단 버튼 그룹 */}
          <div className="flex justify-center gap-4">
            <Link
              href="/test"
              className="px-6 py-4 bg-indigo-500 dark:bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors"
            >
              나도 테스트하기
            </Link>
            <button
              onClick={handleShare}
              className="px-6 py-4 bg-white dark:bg-gray-800 text-indigo-500 dark:text-indigo-400 font-medium rounded-xl border-2 border-indigo-500 dark:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors inline-flex items-center gap-2"
            >
              <Share2 size={20} />
              결과 공유하기
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
