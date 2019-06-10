import React from "react";

const Persons = ({ filteredNames }) => {
  return (
    <div>
      <div>
        {filteredNames.map(person => (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Persons;
