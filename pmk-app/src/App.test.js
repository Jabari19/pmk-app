import { render, screen } from '@testing-library/react';
import App from './App';

import QuizDeck from './QuizDeck';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Trying to see how it works!!!}
      </header>
      <main>
        <QuizDeck />
      </main>
    </div>
  );
}

export default App;
