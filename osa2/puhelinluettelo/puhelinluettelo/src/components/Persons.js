import React from "react";

const Persons = ({ persons, searchName, handleDelete }) => {
  const filteredNames = persons.filter(
    person => person.name.toLowerCase().indexOf(searchName.toLowerCase()) >= 0
  );

  return (
    <div>
      <div>
        {filteredNames.map((person, index) => (
          <p key={index}>
            {person.name} {person.number}
            <button
              onClick={() => {
                handleDelete(person.id);
              }}
            >
              delete
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Persons;
