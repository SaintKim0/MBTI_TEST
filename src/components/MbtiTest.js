import React from 'react';
import MbtiQuestion from './MbtiQuestion';
import MbtiProgressBar from './MbtiProgressBar';
import MbtiResult from './MbtiResult';
import useMbtiTest from '../hooks/useMbtiTest';
import '../styles/index.css';

const MbtiTest = ({ onComplete, questions, onReturn, customStyles = {} }) => {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    progress,
    isCompleted,
    result,
    answerQuestion,
    goToPreviousQuestion,
    resetTest,
  } = useMbtiTest(questions);

  // 결과가 나왔을 때 콜백 함수 호출
  React.useEffect(() => {
    if (isCompleted && result && onComplete) {
      onComplete(result);
    }
  }, [isCompleted, result, onComplete]);

  return (
    <div className="mbti-container" style={customStyles.container}>
      {!isCompleted ? (
        <>
          <MbtiProgressBar
            current={currentQuestionIndex + 1}
            total={totalQuestions}
            progress={progress} // progress 변수 사용
            customStyles={customStyles.progressBar}
          />

          <div className="question-navigation">
            <p>
              질문 {currentQuestionIndex + 1} / {totalQuestions}
            </p>
            <div className="progress-percentage">진행률: {progress}%</div>{' '}
            {/* progress 변수 사용 */}
            {currentQuestionIndex > 0 && (
              <button
                onClick={goToPreviousQuestion}
                className="mbti-back-button"
                style={customStyles.backButton}
              >
                ← 이전 질문
              </button>
            )}
          </div>

          <MbtiQuestion
            question={currentQuestion}
            onAnswer={answerQuestion}
            customStyles={customStyles.question}
          />
        </>
      ) : (
        <>
          <MbtiResult result={result} customStyles={customStyles.result} />
          <div className="mbti-buttons">
            <button
              onClick={resetTest}
              className="mbti-reset-button"
              style={customStyles.resetButton}
            >
              테스트 다시하기
            </button>
            <button
              onClick={onReturn}
              className="mbti-home-button"
              style={customStyles.homeButton}
            >
              메인화면으로
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MbtiTest;
