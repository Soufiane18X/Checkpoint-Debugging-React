// App.js
import React, { useState } from 'react';
import Counter from './Counter';
import Greeting from './Greeting';
import "./App.css"

function App() {
  const [count, setCount] = useState(0);
  const username = "Soufiane";

  return (
    <div>
      <Greeting user={username} />
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

export default App;