// src/components/MbtiHome.js
import React from 'react';
import '../styles/mbtiHome.css';

const MbtiHome = ({ onStartTest }) => {
  return (
    <div className="mbti-home-container">
      <h1 className="mbti-home-title">MBTI 성격유형 테스트</h1>

      <div className="mbti-home-description">
        <p>
          MBTI(Myers-Briggs Type Indicator)는 개인의 성격 유형을 16가지로
          분류하는 심리 검사입니다.
        </p>
        <p>
          이 테스트를 통해 자신의 성격 유형을 알아보고, 자신과 타인을 더 잘
          이해할 수 있습니다.
        </p>
        <p>질문에 정답은 없으니 편안한 마음으로 솔직하게 답변해 주세요.</p>
      </div>

      <div className="mbti-home-instructions">
        <h2>테스트 방법</h2>
        <ol>
          <li>아래에서 적합한 질문지 유형을 선택하세요.</li>
          <li>각 질문에 자신과 가장 일치하는 답변을 선택하세요.</li>
          <li>모든 질문에 답하면 MBTI 성격유형 결과를 확인할 수 있습니다.</li>
        </ol>
      </div>

      <div className="mbti-question-select">
        <h2>질문지 선택</h2>
        <div className="mbti-question-options">
          <div
            className="mbti-question-option"
            onClick={() => onStartTest('adult')}
          >
            <h3>성인용 질문지</h3>
            <p>일반적인 상황과 개념을 다룬 질문들로 구성되어 있습니다.</p>
            <p>성인 및 청소년(중학생 이상)에게 적합합니다.</p>
            <button className="mbti-start-button">
              성인용 테스트 시작하기
            </button>
          </div>

          <div
            className="mbti-question-option"
            onClick={() => onStartTest('child')}
          >
            <h3>어린이용 질문지</h3>
            <p>초등학생도 이해하기 쉬운 상황과 예시로 구성되어 있습니다.</p>
            <p>어린이와 청소년(초등학생)에게 적합합니다.</p>
            <button className="mbti-start-button">
              어린이용 테스트 시작하기
            </button>
          </div>

          <div
            className="mbti-question-option"
            onClick={() => onStartTest('baby')}
          >
            <h3>영유아용 질문지</h3>
            <p>
              유치원생,미취학 아동이 이해하기 쉬운 내용으로 구성되어
              있습니다.
            </p>
            <p>부모님이 자녀의 성향을 파악하는 데 도움이 됩니다.</p>
            <button className="mbti-start-button">
              영유아용 테스트 시작하기
            </button>
          </div>
        </div>
      </div>

      <div className="mbti-home-tips">
        <h2>테스트 팁</h2>
        <ul>
          <li>답변에 너무 오래 고민하지 마세요. 첫 느낌이 가장 정확합니다.</li>
          <li>옳고 그름이 없으니 솔직하게 답변하세요.</li>
          <li>40개의 질문에 모두 답변해야 정확한 결과를 얻을 수 있습니다.</li>
          <li>
            영유아용 테스트는 부모님이 자녀의 행동을 관찰하여 답변해주세요.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MbtiHome;
