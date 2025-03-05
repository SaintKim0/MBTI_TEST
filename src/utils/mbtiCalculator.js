// src/utils/mbtiCalculator.js
import { mbtiTypes } from '../data/mbtiTypes';

export const calculateMbtiType = (answers, questions) => {
  // 점수 초기화
  const scores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  // 각 질문에 대한 응답을 기반으로 점수 계산
  answers.forEach((answer, index) => {
    if (index >= questions.length) return;

    const question = questions[index];
    const category = question.category;

    if (category === 'EI') {
      answer > 3 ? (scores.E += answer - 3) : (scores.I += 3 - answer);
    } else if (category === 'SN') {
      answer > 3 ? (scores.N += answer - 3) : (scores.S += 3 - answer);
    } else if (category === 'TF') {
      answer > 3 ? (scores.F += answer - 3) : (scores.T += 3 - answer);
    } else if (category === 'JP') {
      answer > 3 ? (scores.P += answer - 3) : (scores.J += 3 - answer);
    }
  });

  // 최종 MBTI 유형 결정
  const type =
    (scores.E > scores.I ? 'E' : 'I') +
    (scores.S > scores.N ? 'S' : 'N') +
    (scores.T > scores.F ? 'T' : 'F') +
    (scores.J > scores.P ? 'J' : 'P');

  // 백분율 계산
  const percentages = {
    EI: Math.round((scores.E / (scores.E + scores.I)) * 100),
    SN: Math.round((scores.S / (scores.S + scores.N)) * 100),
    TF: Math.round((scores.T / (scores.T + scores.F)) * 100),
    JP: Math.round((scores.J / (scores.J + scores.P)) * 100),
  };

  return {
    type,
    typeInfo: mbtiTypes[type] || {
      title: '알 수 없는 유형',
      description: '충분한 응답이 없어 정확한 유형을 판단할 수 없습니다.',
    },
    scores,
    percentages,
  };
};
