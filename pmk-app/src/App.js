import React, { useState, useEffect } from "react";
import "./App.css";
import CardBox from "./CardBox";

function App() {
  const [cards] = useState([
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
    {
      id: 4,
      question:"The association designed to bring together project management professionals and systematically capture project management knowledge is called:?",
      options:[
      "The Knowledge Association",
      "Project Management Professionals Association",
      "Project Management Institute",
      "Project Managers Institute",

      ],
      answer: "Project Management Institute",

    },

  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10); // Set initial timer value in seconds

  const totalQuestions = cards.length;
  const scorePercentage = (score / totalQuestions) * 100;

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0) {
      handleNextCard(); // Automatically move to the next card when time is up
    }
    return () => clearTimeout(countdown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % totalQuestions);
    setSelectedAnswer(null); // Reset selected answer when moving to the next card
    setTimer(10); // Reset timer for the next question
  };

  const handlePrevCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + totalQuestions) % totalQuestions
    );
    setSelectedAnswer(null); // Reset selected answer,then moving to the previous card
    setTimer(10); // Reset timer for the previous question
  };

  const handleSelectAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    //updating the score
    if (selectedOption === cards[currentCardIndex].answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const isAnswerCorrect = () => {
    return selectedAnswer === cards[currentCardIndex].answer;
  };

  return (
    <div className="quiz-deck">
      <h1>PROJECT MANAG'T STUDY QUIZ</h1>
      <div className="timer">Time Remaining: {timer} seconds</div>
      {cards.length > 0 && (
        <CardBox
          question={cards[currentCardIndex].question}
          options={cards[currentCardIndex].options}
          onSelect={handleSelectAnswer}
        />
      )}
      {selectedAnswer !== null && (
        <p>
          Your answer is {isAnswerCorrect() ? "correct" : "incorrect"}.
        </p>
      )}
      {timer === 0 && <p>Time's up!</p>}

      
      <h1>Scores: {score}</h1>
      <h2>Score Percentage: {scorePercentage.toFixed(2)}%</h2>
      {(totalQuestions !== 4 || scorePercentage !== 100) && (
        <div className="navigation">
          <button onClick={handlePrevCard} disabled={totalQuestions <= 1}>
            Previous Quiz
          </button>
          <button onClick={handleNextCard} disabled={totalQuestions <= 1}>
            Next Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default App;