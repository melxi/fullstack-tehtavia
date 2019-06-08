import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(
    Array.apply(null, { length: props.anecdotes.length }).map(() => 0)
  );
  const highestVote = Math.max(...points);
  const highestIndex = points.indexOf(highestVote);

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * props.anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        {props.anecdotes[selected]}
        <br />
        {`has ${points[selected]} votes`}
      </div>
      <button
        onClick={() => {
          handleVote();
        }}
      >
        vote
      </button>
      <button
        onClick={() => {
          handleNext();
        }}
      >
        next anecdote
      </button>
      <div>
        <h1>Anecdote with most votes</h1>
        {props.anecdotes[highestIndex]}
        <br />
        {`has ${points[highestIndex]} votes`}
      </div>
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
