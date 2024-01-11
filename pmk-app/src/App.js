import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

const QuizDeck = () => {
  const [cards, setCards] = useState([
    { id: 1, question: 'What is agile project management?', answer: 'Agile project management is an iterative approach to managing software development projects that focuses on continuous releases and incorporating customer feedback with every ite' },
    { id: 2, question: 'What are the four key principles of Agile?', answer: ' 1. Individuals and interactions over processes and tools., 2. Working software over comprehensive documentation., 3. Customer collaboration over contract negotiation., 4. Responding to change over following a plan.'},
    { id: 3, question: 'What are the 4 basics of project management?', answer: 'four key elements of project management: scope, time, cost, and quality. By managing these elements effectively, you can ensure that your project is completed on time, within budget, and to the required quality standards.' },
    // Add more cards as needed
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
      <h1>Quiz Cards</h1>
      {cards.length > 0 && (
        <div className="card">
          <h2>Card {currentCardIndex + 1}</h2>
          <p>Question: {cards[currentCardIndex].question}</p>
          <p>Answer: {cards[currentCardIndex].answer}</p>
        </div>
      )}
      <div className="navigation">
        <button onClick={handlePrevCard} disabled={cards.length <= 1}>
          Previous Card
        </button>
        <button onClick={handleNextCard} disabled={cards.length <= 1}>
          Next Card
        </button>
      </div>
    </div>
  );
};

export default QuizDeck;

