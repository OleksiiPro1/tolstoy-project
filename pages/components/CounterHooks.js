import { useEffect, useState } from 'react';

export default function CounterHooks() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  const handleClick = () => {
    setCount(count + 1);
    setTime(new Date());
  };

  return (
    <div>
      <br />
      <hr />

      <h3>Welcome to the Counter </h3>
      <button className="button" onClick={handleClick}>
        {count}
      </button>
      {/* <p>
        {`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}
      </p> */}
    </div>
  );
}
