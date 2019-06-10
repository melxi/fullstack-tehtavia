import React from "react";

const Persons = ({ persons, searchName }) => {
  const filteredNames = persons.filter(
    person => person.name.toLowerCase().indexOf(searchName.toLowerCase()) >= 0
  );

  return (
    <div>
      <div>
        {filteredNames.map(person => (
          <p key={person.id}>
            {person.name} {person.number}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Persons;
