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

const Statics = (props) => {
  return (
    <>
      <Header header={"statics"} />
      <Display text={"good"} value={props.good || 0} />
      <Display text={"neutral"} value={props.neutral || 0} />
      <Display text={"bad"} value={props.bad || 0} />
      <Display text={"all"} value={props.all || 0} />
      <Display text={"average"} value={props.average || 0} />
      <Display text={"positive"} value={props.positive || 0} />
    </>
  );
};

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
      <Statics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
