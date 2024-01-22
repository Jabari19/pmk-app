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
    { id: 7, question: 'Maslow’s hierarchy of needs has the following order (from lowest to highest level needs:', answer: 'physiological, safety, social, esteem, self-actualization.' },
    { id: 8, question: 'A communication management plan should include:', answer:'how project information is stored, retrieved, and discarded at the end of the project.'},
    { id: 9, question: 'Memos, reports, and letters are examples of:', answer: 'written communication.'},
    { id: 10, question:'Performance reports focusing on current information about the project are called:', answer:'progress reports.'},
    { id: 11, question: 'Which of the following is an activity to be performed after a meeting?', answer:'review and professionally prepare the minutes'},
    { id: 12, question: 'Which of the following is considered an asynchronous communication method?', answer:'electronic mail'},
    { id: 13, question: 'When using synchronous communication, all parties involved are present:', answer:' at the same time but not necessarily at the same place.'},
    { id: 14, question: 'The collection of stages that make up the life of a product. These stages are typically introduction, growth, maturity and retirement.', answer:'Product Life Cycle'},
    { id: 15, question:'The collection of tools, methodologies, techniques, standards and resources used to manage a project. These may be formal systems and strategies determined by the organization or informal methods utilized by project managers.', answer:'Project Management Information Systems (PMIS)'},
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

