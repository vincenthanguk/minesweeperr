import React, { FC, useState } from 'react';

interface Props {
  defaultCount?: number;
}

export const ClickCounter: FC<Props> = ({ defaultCount = 0 }) => {
  const [count, setCount] = useState<number>(defaultCount);

  const [evenCount, setEvenCount] = useState<number>(defaultCount);
  return (
    <div>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
      <div>
        {/* <h1>Count: {evenCount}</h1>
        <button onClick={() => setEvenCount(evenCount + 2)}>Increase</button>
        <button onClick={() => setEvenCount(evenCount - 2)}>Decrease</button> */}
      </div>
    </div>
  );
};
