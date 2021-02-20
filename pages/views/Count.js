import { useState } from "react";

function Count(props) {
  const [number, setNumber] = useState(props.number);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </div>
  );
}
Count.getInitialProps = () => {
  return {
    number: 0,
  };
};

export default Count;
