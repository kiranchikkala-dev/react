import { useCallback, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const refFn = (node) => {
    console.log('Got element once:', node);
  };
  return (
    <div>
      {console.log('render')}

      <div ref={refFn}>Hello</div>
      {count}
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}
export default App;
