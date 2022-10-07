import { useEffect, useState } from 'react';
import CounterHooks from './CounterHooks';

// import SayHi from './SayHi';

export default function Counter() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  function handlerAlertClick() {
    setTimeout(() => {
      console.log(`Count: ${count}`);
      alert('You clicked on: ' + count);
    }, 100);
  }

  return (
    <div className="counter">
      <h2>Count: {count} </h2>
      <button className="button" onClick={() => setCount(count + 1)}>
        Click me to + 1
      </button>
      <button className="button" onClick={() => setCount(count - 1)}>
        Click me to - 1
      </button>
      <div>
        <button className="button" onClick={handlerAlertClick}>
          Show alert
        </button>
      </div>

      <CounterHooks />
      {/* <SayHi /> */}
    </div>
  );
}
