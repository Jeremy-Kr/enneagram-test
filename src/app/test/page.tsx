import TestComponent from "@/app/test/TestComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "테스트 진행 중",
  description: "나의 에니어그램 유형을 찾기 위한 15개의 질문에 답해보세요.",
  robots: {
    index: false,
  },
};

export default function TestPage() {
  return <TestComponent />;
}
