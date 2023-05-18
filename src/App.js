import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [isVisible, setIsVisibel] = useState(false);
  //     Getter      Setter                 initial value

  const toggleVisibility = () => setIsVisibel(!isVisible);
  return (
    <div className="App">
      <h1>Workshop React Hooks</h1>
      <button className="visibility-btn" onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Counter
      </button>
      {isVisible && <Counter />}
    </div>
  );
}

export default App;
