import ResultComponent from "@/app/result/ResultComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "테스트 결과",
  description: "당신의 에니어그램 유형과 성격 특성을 확인해보세요.",
  robots: {
    index: false,
  },
};

export default function ResultPage() {
  return <ResultComponent />;
}
