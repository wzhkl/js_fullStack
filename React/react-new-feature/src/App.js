import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ConcurrentModeDemo from './concurrent/index.jsx'
import Index from './lifeCycle-react15/index.jsx'
// react16 引进了 hooks， function 增强

function App() {
  const [ parentCount, setParentCount ] = useState(0)
  return (
    <div>
      {/* <ConcurrentModeDemo></ConcurrentModeDemo> */}
      <button onClick={() => {
        setParentCount(parentCount + 1)
      }}>setParentCount</button>
      <Index parentCount={parentCount} />
    </div>
  )
}

export default App;
