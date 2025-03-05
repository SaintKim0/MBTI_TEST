import React from 'react';
import { mbtiCompatibility } from '../data/mbtiCompatibility';

const MbtiResult = ({ result, customStyles = {} }) => {
  const { type, typeInfo, percentages } = result;
  const compatibility = mbtiCompatibility[type] || {
    bestMatches: [],
    goodMatches: [],
    description: '궁합 정보가 없습니다.',
  };

  return (
    <div className="mbti-result" style={customStyles.container}>
      <h2 style={customStyles.title}>MBTI 분석 결과</h2>

      <div className="mbti-result-title" style={customStyles.typeTitle}>
        {type}: {typeInfo.title}
      </div>

      <div className="mbti-result-description" style={customStyles.description}>
        {typeInfo.description}
      </div>

      <h3 style={customStyles.sectionTitle}>성격 특성</h3>
      <div className="mbti-traits-list">
        {typeInfo.traits.map((trait, index) => (
          <span
            key={index}
            className="mbti-trait-tag"
            style={customStyles.traitTag}
          >
            {trait}
          </span>
        ))}
      </div>

      <h3 style={customStyles.sectionTitle}>강점</h3>
      <ul>
        {typeInfo.strengths.map((strength, index) => (
          <li key={index}>{strength}</li>
        ))}
      </ul>

      <h3 style={customStyles.sectionTitle}>약점</h3>
      <ul>
        {typeInfo.weaknesses.map((weakness, index) => (
          <li key={index}>{weakness}</li>
        ))}
      </ul>

      <h3 style={customStyles.sectionTitle}>적합한 직업</h3>
      <p>{typeInfo.careers.join(', ')}</p>

      <h3 style={customStyles.sectionTitle}>성격 유형 분석</h3>
      <div>
        <p>
          외향형(E) {percentages.EI}% - 내향형(I) {100 - percentages.EI}%
        </p>
        <p>
          감각형(S) {percentages.SN}% - 직관형(N) {100 - percentages.SN}%
        </p>
        <p>
          사고형(T) {percentages.TF}% - 감정형(F) {100 - percentages.TF}%
        </p>
        <p>
          판단형(J) {percentages.JP}% - 인식형(P) {100 - percentages.JP}%
        </p>
      </div>

      <h3 style={customStyles.sectionTitle}>궁합 정보</h3>
      <p>
        <strong>최고의 궁합:</strong> {compatibility.bestMatches.join(', ')}
      </p>
      <p>
        <strong>좋은 궁합:</strong> {compatibility.goodMatches.join(', ')}
      </p>
      <p>{compatibility.description}</p>
    </div>
  );
};

export default MbtiResult;
