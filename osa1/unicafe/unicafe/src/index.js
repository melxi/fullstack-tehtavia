import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statisctic = props => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const Statisctics = props => {
  if (props.all > 0) {
    return (
      <>
        <h1>statistics</h1>
        <Statisctic text="good" value={props.good} />
        <Statisctic text="neutral" value={props.neutral} />
        <Statisctic text="bad" value={props.bad} />
        <Statisctic text="all" value={props.all} />
        <Statisctic text="average" value={props.average} />
        <Statisctic text="positive" value={props.positive} />
      </>
    );
  }
  return (
    <>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </>
  );
};

const Button = props => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = (good * 1 + bad * -1) / all;
  const positive = (good / all) * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        text="good"
        handleClick={() => {
          setGood(good + 1);
        }}
      />
      <Button
        text="neutral"
        handleClick={() => {
          setNeutral(neutral + 1);
        }}
      />
      <Button
        text="bad"
        handleClick={() => {
          setBad(bad + 1);
        }}
      />
      <Statisctics
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

ReactDOM.render(<App />, document.getElementById("root"));
