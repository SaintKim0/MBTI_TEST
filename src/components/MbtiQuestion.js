import React from 'react';

const MbtiQuestion = ({
  question,
  onAnswer,
  selectedAnswer,
  customStyles = {},
}) => {
  const options = [
    { value: 5, label: '매우 그렇다' },
    { value: 4, label: '그렇다' },
    { value: 3, label: '보통이다' },
    { value: 2, label: '아니다' },
    { value: 1, label: '전혀 아니다' },
  ];

  return (
    <div className="mbti-question" style={customStyles.container}>
      <h3 style={customStyles.questionText}>{question.text}</h3>
      <div className="mbti-options">
        {options.map((option) => (
          <button
            key={option.value}
            className={`mbti-option-button ${
              selectedAnswer === option.value ? 'selected' : ''
            }`}
            onClick={() => onAnswer(option.value)}
            style={
              selectedAnswer === option.value
                ? {
                    ...customStyles.optionButton,
                    ...customStyles.selectedOption,
                  }
                : customStyles.optionButton
            }
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MbtiQuestion;
