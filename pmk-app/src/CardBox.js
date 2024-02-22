import React from "react";

const CardBox = ({ question, options, onSelect }) => {
  return (
    <div className="card-box">
      <div className="card">
        <h2>Question</h2>
        <p>{question}</p>
        <div className="options">
          {options.map((option, index) => (
            <button key={index} onClick={() => onSelect(option)}>
              {String.fromCharCode(65 + index)}. {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardBox;