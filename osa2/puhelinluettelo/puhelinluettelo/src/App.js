import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleSearch = event => {
    setSearchName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    persons.forEach(person => {
      if (person.name === newName) {
        alert(`${person.name} is already added to phonebook`);
        setPersons(persons.splice(0, persons.length));
      } else {
        setPersons(persons.concat({ name: newName, number: newNumber }));
      }
    });

    setNewName("");
    setNewNumber("");
  };

  const filteredNames = persons.filter(
    person => person.name.toLowerCase().indexOf(searchName.toLowerCase()) >= 0
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleSearch} value={searchName} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
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

export default App;
