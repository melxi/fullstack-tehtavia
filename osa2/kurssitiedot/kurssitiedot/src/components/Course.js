import React from "react";

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

export default Course;
