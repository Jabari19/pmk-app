import React, { useState } from "react";
import "./App.css";

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      question: "What is agile project management?",
      answer:
        "Agile project management is an iterative approach to managing software development projects that focuses on continuous releases and incorporating customer feedback with every ite",
    },
    {
      id: 2,
      question: "What are the four key principles of Agile?",
      answer:
        " 1. Individuals and interactions over processes and tools., 2. Working software over comprehensive documentation., 3. Customer collaboration over contract negotiation., 4. Responding to change over following a plan.",
    },
    {
      id: 3,
      question: "What are the 4 basics of project management?",
      answer:
        "four key elements of project management: scope, time, cost, and quality. By managing these elements effectively, you can ensure that your project is completed on time, within budget, and to the required quality standards.",
    },
    {
      id: 4,
      question:
        "During ________, actual project work is rapidly undertaken by the team.",
      answer: "Performing",
    },
    {
      id: 5,
      question:
        "Motivation refers to an individuals ________ of effort toward attaining a goal.",
      answer: ". intensity, direction, and persistence ",
    },
    {
      id: 7,
      question:
        "Maslows hierarchy of needs has the following order (from lowest to highest level needs:",
      answer: "physiological, safety, social, esteem, self-actualization.",
    },
    {
      id: 8,
      question: "A communication management plan should include:",
      answer:
        "how project information is stored, retrieved, and discarded at the end of the project.",
    },
    {
      id: 9,
      question: "Memos, reports, and letters are examples of:",
      answer: "written communication.",
    },
    {
      id: 10,
      question:
        "Performance reports focusing on current information about the project are called:",
      answer: "progress reports.",
    },
    {
      id: 11,
      question:
        "Which of the following is an activity to be performed after a meeting?",
      answer: "review and professionally prepare the minutes",
    },
    {
      id: 12,
      question:
        "Which of the following is considered an asynchronous communication method?",
      answer: "electronic mail",
    },
    {
      id: 13,
      question:
        "When using synchronous communication, all parties involved are present:",
      answer: " at the same time but not necessarily at the same place.",
    },
    {
      id: 14,
      question:
        "The collection of stages that make up the life of a product. These stages are typically introduction, growth, maturity and retirement.",
      answer: "Product Life Cycle",
    },
    {
      id: 15,
      question:
        "The collection of tools, methodologies, techniques, standards and resources used to manage a project. These may be formal systems and strategies determined by the organization or informal methods utilized by project managers.",
      answer: "Project Management Information Systems (PMIS)",
    },
    {
      id: 17,
      question:
        "During project planning in a matrix organization, the project manager determines that additional human resources are needed. From whom would he request these resources?.",
      answer:
        "Functional manager, Did you remember that in a matrix organization, the functional manager controls the resources?",
    },
    {
      id: 18,
      question:
        "A project manager must publish a project schedule. Activities, start/end times, and resources are identified. What should the project manager do NEXT?.",
      answer:
        "Confirm the availability of the resources-The project schedule remains preliminary until resource assignments are confirmed.",
    },
    {
      id: 19,
      question:
        "The project manager is looking at the project resource needs and lessons learned from past projects. This information causes the project manager to be concerned about the ability to acquire enough resources for the project in six months. Which of the following would be the LEAST effective preventive action? A. Make sure functional managers have a copy of the resource histogram. B. Show the sponsor the data, and explain the project manager concern. C. Determine metrics to use as an early warning sign that resources will not be available- D. Ask functional managers for their opinions:.",
      answer:
        "A. Make sure functional managers have a copy of the resource histogram Sending data without pointing out the issues(choice A) increases the likelihood that the communication will not be adequately decoded by the recipient. The other choices are more effective communication in this instance.",
    },
    {
      id: 20,
      question:
        "The PMI Code of Ethics and Professional Conduct [2] is based on four values that were identified as most important to the project management community:.",
      answer: "Responsibility,▶ Respect,▶ Fairness, and▶ Honesty.",
    },
    {
      id: 21,
      question:
        "Examples of organizational structures that can improve collaboration include, but are not limited to:.",
      answer:
        "▹ Definitions of roles and responsibilities,▹ Allocation of employees and vendors into project teams, ▹ Formal committees tasked with a specific objective, and ▹ Standing meetings that regularly review a given topic.",
    },
    {
      id: 22,
      question:
        "The condition of having the right, within a given context, to make relevant decisions, establish or improve procedures, apply project resources, expend funds or give approvals. Authority is conferred from one entity to another, whether done explicitly or implicitly.",
      answer: "▶ Authority",
    },
    {
      id: 23,
      question:
        "The condition of being answerable for an outcome. Accountability is not shared.",
      answer: "▶ Accountability",
    },
    {
      id: 24,
      question:
        "The condition of being obligated to do or fulfill something. Responsibility can be shared.",
      answer: "▶ Responsibility",
    },
    {
      id: 25,
      question:
        "Effective and appropriate risk responses can reduce individual and overall project threats and increase individual and overall opportunities. Project teams should consistently identify potential risk responses with the following characteristics in mind.",
      answer:
        "▶ Appropriate and timely to the significance of the risk, ▶ Cost effective, ▶ Realistic within the project context,  ▶ Agreed to by relevant stakeholders, and ▶ Owned by a responsible person.",
    },
    {
      id: 26,
      question:
        " project performance domain is a group of related activities that are critical for the effective delivery of project outcomes. Project performance domains are interactive, interrelated, and interdependent areas of focus that work in unison to achieve desired project outcomes. There are eight project performance domains:.",
      answer:
        "▶ Stakeholders,▶ Team,▶ Development Approach and Life Cycle,▶ Planning,▶ Project Work,▶ Delivery,▶ Measurement, and ▶ Uncertainty",
    },
    {
      id: 27,
      question: "Stakeholder.",
      answer:
        "An individual, group, or organization that may affect, be affected by, or perceive itself to be affected by a decision, activity, or outcome of a project, program, or portfolio.",
    },
    {
      id: 28,
      question: "Stakeholder Analysis.",
      answer:
        "A method of systematically gathering and analyzing quantitative and qualitative information to determine whose interests should be taken into account throughout the project.",
    },
    {
      id: 29,
      question: "Project Manager.",
      answer:
        "The person assigned by the performing organization to lead the project team that is responsible for achieving the project objectives",
    },
    {
      id: 30,
      question: "Project Management Team.",
      answer:
        "The members of the project team who are directly involved in project management activities",
    },
    {
      id: 31,
      question: "Project Team.",
      answer:
        "A set of individuals performing the work of the project to achieve its objectives.",
    },
    { id: 32, question: ".", answer: "" },
    { id: 33, question: ".", answer: "" },
    { id: 34, question: ".", answer: "" },
    { id: 35, question: ".", answer: "" },
    { id: 36, question: ".", answer: "" },
    { id: 37, question: ".", answer: "" },
    { id: 38, question: ".", answer: "" },
    { id: 39, question: ".", answer: "" },
    { id: 40, question: ".", answer: "" },
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const toggleAnswer = (index) => {
    const newCards = [...cards];
    newCards[index].showAnswer = !newCards[index].showAnswer;
    setCards(newCards);
  };

  return (
    <div className="quiz-deck">
      <h1>PMK Study Guides</h1>
      {cards.length > 0 && (
        <div className="card">
          <h2>Practice Quiz {currentCardIndex + 1}</h2>
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
}

export default App;
