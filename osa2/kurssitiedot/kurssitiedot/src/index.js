import React from "react";
import ReactDOM from "react-dom";

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ parts }) => {
  return (
    <p>
      {parts.name} {parts.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map(part => (
        <Part key={part.id} parts={part} />
      ))}
    </>
  );
};

const Total = ({ course }) => {
  const total = course.parts.reduce((total, exercises) => {
    return total + exercises.exercises;
  }, 0);

  return (
    <p>
      <strong>total of {total} exercices</strong>
    </p>
  );
};

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course, index) => (
        <div key={index}>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
        </div>
      ))}
    </>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: "Node.js",
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
