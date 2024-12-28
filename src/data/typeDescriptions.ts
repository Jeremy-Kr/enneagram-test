import { EnneagramType, EnneagramDescription } from "@/types/enneagram";

export const typeDescriptions: Record<EnneagramType, EnneagramDescription> = {
  [EnneagramType.PERFECTIONIST]: {
    title: "개혁가, 완벽주의자",
    description:
      "도덕적 기준이 높고 올바른 것을 추구하는 유형이에요. 자신과 타인에 대한 높은 기준을 가지고 있어요.",
    characteristics: [
      "체계적이고 질서정연한 것을 좋아해요",
      "옳고 그름에 대한 명확한 기준이 있어요",
      "세부사항에 주의를 기울여요",
    ],
    strengths: ["성실함", "책임감", "정직성"],
    weaknesses: ["과도한 자기비판", "융통성 부족", "완벽주의"],
  },
  [EnneagramType.HELPER]: {
    title: "조력가, 조언자",
    description:
      "다른 사람들을 돕고 지원하는 것에서 만족을 느끼는 유형이에요. 따뜻하고 이타적인 성향을 가지고 있어요.",
    characteristics: [
      "공감능력이 뛰어나요",
      "대인관계를 중요시해요",
      "봉사정신이 강해요",
    ],
    strengths: ["친절함", "배려심", "이타성"],
    weaknesses: ["자기희생", "의존성", "간접적 표현"],
  },
  [EnneagramType.ACHIEVER]: {
    title: "성취가, 성공지향자",
    description:
      "목표 달성과 성공을 추구하는 유형이에요. 효율적이고 적응력이 뛰어나요.",
    characteristics: ["목표 지향적이에요", "열정적이에요", "효율성을 추구해요"],
    strengths: ["실행력", "적응력", "낙관성"],
    weaknesses: ["과잉활동", "경쟁심", "자기과시"],
  },
  [EnneagramType.INDIVIDUALIST]: {
    title: "예술가, 개인주의자",
    description:
      "자신만의 독특한 정체성을 추구하는 유형이에요. 감수성이 풍부하고 창의적이에요.",
    characteristics: ["감성이 풍부해요", "창의적이에요", "진정성을 추구해요"],
    strengths: ["창의성", "공감능력", "자기표현"],
    weaknesses: ["우울감", "과민반응", "자기몰입"],
  },
  [EnneagramType.INVESTIGATOR]: {
    title: "관찰가, 사색가",
    description:
      "지적 탐구와 통찰을 추구하는 유형이에요. 독립적이고 분석적인 성향을 가지고 있어요.",
    characteristics: [
      "지적 호기심이 많아요",
      "관찰력이 뛰어나요",
      "독립적이에요",
    ],
    strengths: ["통찰력", "객관성", "집중력"],
    weaknesses: ["고립", "과도한 분석", "감정표현 부족"],
  },
  [EnneagramType.LOYALIST]: {
    title: "충성가, 회의론자",
    description:
      "안전과 신뢰를 중요시하는 유형이에요. 책임감이 강하고 의리가 있어요.",
    characteristics: ["신중해요", "책임감이 강해요", "의리가 있어요"],
    strengths: ["신뢰성", "예측력", "충성심"],
    weaknesses: ["우유부단", "불안감", "의심"],
  },
  [EnneagramType.ENTHUSIAST]: {
    title: "낙천가, 모험가",
    description:
      "새로운 경험과 즐거움을 추구하는 유형이에요. 활기차고 긍정적인 성향을 가지고 있어요.",
    characteristics: ["활기차요", "다재다능해요", "모험을 즐겨요"],
    strengths: ["낙관성", "적응력", "열정"],
    weaknesses: ["산만함", "과도한 낙관", "책임회피"],
  },
  [EnneagramType.CHALLENGER]: {
    title: "지도자, 도전가",
    description:
      "힘과 정의를 추구하는 유형이에요. 강하고 결단력 있는 성향을 가지고 있어요.",
    characteristics: ["리더십이 있어요", "결단력이 있어요", "정의감이 강해요"],
    strengths: ["자신감", "추진력", "보호본능"],
    weaknesses: ["지배욕", "공격성", "과도한 통제"],
  },
  [EnneagramType.PEACEMAKER]: {
    title: "중재자, 평화주의자",
    description:
      "내적 평화와 조화를 추구하는 유형이에요. 포용력이 있고 편안한 성향을 가지고 있어요.",
    characteristics: [
      "평화를 추구해요",
      "포용력이 있어요",
      "편안한 분위기를 만들어요",
    ],
    strengths: ["수용성", "안정감", "중재능력"],
    weaknesses: ["우유부단", "수동성", "회피성향"],
  },
};
