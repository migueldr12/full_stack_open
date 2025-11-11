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

  const [all, setAll] = useState(0);

  const positive = (+good / +all) * 100;

  const average = (+good * 1 + neutral * 0 + bad * -1) / all;

  const handleGood = () => {
    const goodUpdated = good + 1;

    setGood(goodUpdated);
    setAll(goodUpdated + neutral + bad);
  };
  const handleNeutral = () => {
    const neutralUpdated = neutral + 1;

    setNeutral(neutralUpdated);
    setAll(good + neutralUpdated + bad);
  };
  const handleBad = () => {
    const badUpdated = bad + 1;

    setBad(badUpdated);
    setAll(good + neutral + badUpdated);
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
      <Display text={"all"} value={all} />
      <Display text={"average"} value={average || 0} />
      <Display text={"positive"} value={positive || 0} />
    </div>
  );
};

export default App;
