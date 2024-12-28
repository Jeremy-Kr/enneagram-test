import { Question, EnneagramType } from "@/types/enneagram";

export const questions: Question[] = [
  {
    id: 1,
    text: "다른 사람들의 기대에 부응하기 위해 완벽을 추구해요.",
    type: [
      EnneagramType.PERFECTIONIST,
      EnneagramType.HELPER,
      EnneagramType.LOYALIST,
    ],
    negativeType: [EnneagramType.ENTHUSIAST, EnneagramType.CHALLENGER],
  },
  {
    id: 2,
    text: "새로운 도전보다는 안정적이고 익숙한 환경을 더 선호해요.",
    type: [
      EnneagramType.INVESTIGATOR,
      EnneagramType.LOYALIST,
      EnneagramType.PEACEMAKER,
    ],
    negativeType: [EnneagramType.ACHIEVER, EnneagramType.INDIVIDUALIST],
  },
  {
    id: 3,
    text: "다른 사람들에게 인정받고 성공하는 것이 매우 중요해요.",
    type: [
      EnneagramType.HELPER,
      EnneagramType.ACHIEVER,
      EnneagramType.INDIVIDUALIST,
    ],
    negativeType: [EnneagramType.PEACEMAKER, EnneagramType.INVESTIGATOR],
  },
  {
    id: 4,
    text: "갈등이 생기면 적극적으로 해결하려고 나서는 편이에요.",
    type: [
      EnneagramType.PERFECTIONIST,
      EnneagramType.ACHIEVER,
      EnneagramType.CHALLENGER,
    ],
    negativeType: [EnneagramType.HELPER, EnneagramType.LOYALIST],
  },
  {
    id: 5,
    text: "감정적인 상황에서도 논리적으로 접근하려고 해요.",
    type: [
      EnneagramType.INVESTIGATOR,
      EnneagramType.PERFECTIONIST,
      EnneagramType.ACHIEVER,
    ],
    negativeType: [EnneagramType.ENTHUSIAST, EnneagramType.PEACEMAKER],
  },
  {
    id: 6,
    text: "새로운 경험을 좋아하지만, 가끔은 책임감에서 벗어나고 싶어요.",
    type: [
      EnneagramType.ENTHUSIAST,
      EnneagramType.PEACEMAKER,
      EnneagramType.ACHIEVER,
    ],
    negativeType: [EnneagramType.PERFECTIONIST, EnneagramType.HELPER],
  },
  {
    id: 7,
    text: "주변 사람들의 감정을 잘 알아차리고 도와주려고 해요.",
    type: [
      EnneagramType.HELPER,
      EnneagramType.INDIVIDUALIST,
      EnneagramType.PEACEMAKER,
    ],
    negativeType: [EnneagramType.ACHIEVER, EnneagramType.PERFECTIONIST],
  },
  {
    id: 8,
    text: "불공정한 상황을 보면 목소리를 내어 바로잡으려고 해요.",
    type: [
      EnneagramType.CHALLENGER,
      EnneagramType.PERFECTIONIST,
      EnneagramType.ACHIEVER,
    ],
    negativeType: [EnneagramType.HELPER, EnneagramType.LOYALIST],
  },
  {
    id: 9,
    text: "의미 있는 대화와 깊이 있는 관계를 중요하게 여겨요.",
    type: [
      EnneagramType.INDIVIDUALIST,
      EnneagramType.HELPER,
      EnneagramType.INVESTIGATOR,
    ],
    negativeType: [EnneagramType.ENTHUSIAST, EnneagramType.PEACEMAKER],
  },
  {
    id: 10,
    text: "계획대로 진행되지 않으면 불안해져요.",
    type: [
      EnneagramType.LOYALIST,
      EnneagramType.PERFECTIONIST,
      EnneagramType.ACHIEVER,
    ],
    negativeType: [EnneagramType.ENTHUSIAST, EnneagramType.CHALLENGER],
  },
  {
    id: 11,
    text: "다른 사람들과 잘 지내면서도 제 의견을 분명히 말하는 편이에요.",
    type: [
      EnneagramType.PEACEMAKER,
      EnneagramType.ACHIEVER,
      EnneagramType.CHALLENGER,
    ],
    negativeType: [EnneagramType.PERFECTIONIST, EnneagramType.HELPER],
  },
  {
    id: 12,
    text: "새로운 아이디어로 문제를 해결하는 것을 좋아해요.",
    type: [
      EnneagramType.INVESTIGATOR,
      EnneagramType.ENTHUSIAST,
      EnneagramType.INDIVIDUALIST,
    ],
    negativeType: [EnneagramType.HELPER, EnneagramType.LOYALIST],
  },
  {
    id: 13,
    text: "다른 사람들이 저를 어떻게 생각하는지 신경 쓰여요.",
    type: [
      EnneagramType.HELPER,
      EnneagramType.ACHIEVER,
      EnneagramType.LOYALIST,
    ],
    negativeType: [EnneagramType.PERFECTIONIST, EnneagramType.ACHIEVER],
  },
  {
    id: 14,
    text: "규칙과 원칙을 중요하게 생각하는 편이지만, 때로는 융통성도 발휘해요.",
    type: [
      EnneagramType.PERFECTIONIST,
      EnneagramType.LOYALIST,
      EnneagramType.PEACEMAKER,
    ],
    negativeType: [EnneagramType.ACHIEVER, EnneagramType.CHALLENGER],
  },
  {
    id: 15,
    text: "새로운 도전을 통해 성장하는 것을 좋아해요.",
    type: [
      EnneagramType.ENTHUSIAST,
      EnneagramType.ACHIEVER,
      EnneagramType.CHALLENGER,
    ],
    negativeType: [EnneagramType.PERFECTIONIST, EnneagramType.HELPER],
  },
];
