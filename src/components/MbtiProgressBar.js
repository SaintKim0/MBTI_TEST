import React from 'react';

const MbtiProgressBar = ({ current, total, customStyles = {} }) => {
  const progress = (current / total) * 100;

  return (
    <div>
      <div className="mbti-progress-bar" style={customStyles.container}>
        <div
          className="mbti-progress"
          style={{
            width: `${progress}%`,
            ...customStyles.progress,
          }}
        ></div>
      </div>
      <p style={customStyles.text}>
        질문 {current} / {total}
      </p>
    </div>
  );
};

export default MbtiProgressBar;
