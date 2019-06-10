import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

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
      <Filter handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons filteredNames={filteredNames} />
    </div>
  );
};

export default App;
