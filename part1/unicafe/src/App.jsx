import { useState } from "react";

const Header = ({ header }) => <h1>{header}</h1>;

const Button = ({ clickHandler, text }) => (
  <button onClick={clickHandler}>{text}</button>
);

const Display = ({ text, value }) => (
  <div>
    {text} {value}
  </div>
);

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    const goodUpdated = good + 1;

    setGood(goodUpdated);
  };
  const handleNeutral = () => {
    const neutralUpdated = neutral + 1;

    setNeutral(neutralUpdated);
  };
  const handleBad = () => {
    const badUpdated = bad + 1;

    setBad(badUpdated);
  };

  return (
    <div>
      <Header header={"give geedback"} />
      <Button clickHandler={handleGood} text={"good"} />
      <Button clickHandler={handleNeutral} text={"neutral"} />
      <Button clickHandler={handleBad} text={"bad"} />
      <Header header={"statics"} />
      <Display text={"good"} value={good} />
      <Display text={"neutral"} value={neutral} />
      <Display text={"bad"} value={bad} />
    </div>
  );
};

export default App;
