import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  console.log(persons);

  const handleChange = event => {
    setNewName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    persons.forEach(person => {
      if (person.name === newName) {
        alert(`${person.name} is already added to phonebook`);
        setPersons(persons.splice(0, persons.length));
      } else {
        setPersons(persons.concat({ name: newName }));
      }
    });

    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => (
          <p key={person.name}>{person.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
