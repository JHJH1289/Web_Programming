import { useState } from 'react';

export default function Counter6() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        let temp = number;
        temp = temp + 1;
        console.log(temp); // 1
        temp = temp + 2;
        console.log(temp); // 3
        temp = temp + 3;
        console.log(temp); // 6
        setNumber(temp);   // 최종 값 반영
      }}>+3</button>
    </>
  );
}
