import React, { useState } from "react";
import "./App.css";
import CardBox from "./CardBox";

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      question: "What is agile project management?",
      options: [
        "A management approach for manufacturing projects",
        "An iterative approach to managing software development projects",
        "A waterfall model for project management",
      ],
      answer: "An iterative approach to managing software development projects",
    },
    {
      id: 2,
      question: "What are the four key principles of Agile?",
      options: [
        "Individuals and interactions over processes and tools.",
        "Working software over comprehensive documentation.",
        "Customer collaboration over contract negotiation.",
        "Responding to change over following a plan.",
        "All the above",
      ],
      answer: "All the above",
    },
    {
      id: 3,
      question: "What are the Five Project Management Process Groups in order?",
      options: [
        "Initiating, Planning, Monitoring & Controlling, Executing, and Closing",
        "Initiating, Monitoring & controlling, Planning, Executing, and Closing",
        "Initiating, Executing, Planning, Monitoring & Controlling, and Closing",
        "Initiating, Planning, Executing, Monitoring & Controlling, and Closing",
      ],
      answer: "Initiating, Planning, Executing, Monitoring & Controlling, and Closing",
    },
    
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setSelectedAnswer(null); // Reset selected answer when moving to the next card
  };

  const handlePrevCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
    setSelectedAnswer(null); // Reset selected answer when moving to the previous card
  };

  const handleSelectAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    //updating the score
    if(selectedOption===cards[currentCardIndex].answer){setScore((prevScore)=>prevScore + 1);
    }
  };

  const isAnswerCorrect = () => {
    return selectedAnswer === cards[currentCardIndex].answer;
  };
  

  return (
    <div className="quiz-deck">
      <h1>PROJECT MANAG'T STUDY QUIZ</h1>
      {cards.length > 0 && (
        <CardBox
          question={cards[currentCardIndex].question}
          options={cards[currentCardIndex].options}
          onSelect={handleSelectAnswer}
        />
      )}
      <div className="navigation">
        <button onClick={handlePrevCard} disabled={cards.length <= 1}>
          Previous Quiz
        </button>
        <button onClick={handleNextCard} disabled={cards.length <= 1}>
          Next Quiz
        </button>
      </div>
      {selectedAnswer !== null && (
        <p>
          Your answer is {isAnswerCorrect() ? "correct" : "incorrect"}.
        </p>
      )}
      <h1>Scores: {score}</h1> 

    </div>
  );
}

export default App;
