import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

const QuizDeck = () => {
  const [cards, setCards] = useState([
    { id: 1, question: 'What is agile project management?', answer: 'Agile project management is an iterative approach to managing software development projects that focuses on continuous releases and incorporating customer feedback with every ite' },
    { id: 2, question: 'What are the four key principles of Agile?', answer: ' 1. Individuals and interactions over processes and tools., 2. Working software over comprehensive documentation., 3. Customer collaboration over contract negotiation., 4. Responding to change over following a plan.'},
    { id: 3, question: 'What are the 4 basics of project management?', answer: 'four key elements of project management: scope, time, cost, and quality. By managing these elements effectively, you can ensure that your project is completed on time, within budget, and to the required quality standards.' },
    { id: 4, question: 'During ________, actual project work is rapidly undertaken by the team.', answer: 'Performing' },
    { id: 5, question: 'Motivation refers to an individual’s ________ of effort toward attaining a goal.', answer: '. intensity, direction, and persistence ' },
    { id: 6, question: 'Maslow’s hierarchy of needs has the following order (from lowest to highest level needs):', answer: 'physiological, safety, social, esteem, self-actualization.' },
    // Adding more quizzes as needed
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="quiz-deck">
      <h1>PMK Study Guides</h1>
      {cards.length > 0 && (
        <div className="card">
          <h2>Card {currentCardIndex + 1}</h2>
          <p>Question: {cards[currentCardIndex].question}</p>
          <p>Answer: {cards[currentCardIndex].answer}</p>
        </div>
      )}
      <div className="navigation">
        <button onClick={handlePrevCard} disabled={cards.length <= 1}>
          Previous Quiz
        </button>
        <button onClick={handleNextCard} disabled={cards.length <= 1}>
          Next Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizDeck;

