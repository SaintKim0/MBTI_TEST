import React, { useState } from 'react';
import MbtiHome from './components/MbtiHome';
import MbtiTest from './components/MbtiTest';
import { mbtiQuestions as childQuestions } from './data/mbtiQuestions';
import { mbtiQuestions as adultQuestions } from './data/mbtiQuestions_adult';
import './App.css';

function App() {
  const [testStarted, setTestStarted] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const [questionType, setQuestionType] = useState(null); // 'adult' 또는 'child'

  // 테스트 시작 핸들러
  const handleStartTest = (type) => {
    setQuestionType(type);
    setTestStarted(true);
  };

  // 테스트 완료 핸들러
  const handleTestComplete = (result) => {
    console.log('테스트 완료:', result);
    setTestResult(result); // testResult 변수 설정

    // 결과를 로컬 스토리지에 저장
    const savedResults = JSON.parse(
      localStorage.getItem('mbtiResults') || '[]'
    );
    const newResult = {
      id: Date.now(),
      date: new Date().toISOString(),
      questionType,
      ...result,
    };

    localStorage.setItem(
      'mbtiResults',
      JSON.stringify([newResult, ...savedResults])
    );
  };

  // 테스트 다시 시작 핸들러
  const handleReturnHome = () => {
    setTestStarted(false);
    setTestResult(null);
    setQuestionType(null);
  };

  // 사용할 질문 세트 결정
  const questions = questionType === 'adult' ? adultQuestions : childQuestions;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">MBTI 성격유형 테스트</h1>
        {testStarted && (
          <p className="app-subtitle">
            {questionType === 'adult' ? '성인용' : '어린이용'} 테스트
          </p>
        )}
        {testStarted && (
          <button onClick={handleReturnHome} className="return-home-button">
            메인화면으로
          </button>
        )}

        {/* testResult 변수 사용 */}
        {testResult && (
          <div className="current-result">
            마지막 테스트 결과: <strong>{testResult.type}</strong>
          </div>
        )}
      </header>

      <div className="app-content">
        {!testStarted ? (
          <MbtiHome onStartTest={handleStartTest} />
        ) : (
          <MbtiTest
            onComplete={handleTestComplete}
            questions={questions}
            onReturn={handleReturnHome}
          />
        )}
      </div>

      <footer className="app-footer">
        <p>© 2025 MBTI 성격유형 테스트. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
