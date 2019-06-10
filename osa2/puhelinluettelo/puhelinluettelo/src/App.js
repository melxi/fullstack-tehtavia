import React, { useState, useEffect } from "react";
import personService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    personService.getAll().then(initialPersons => setPersons(initialPersons));
  }, []);

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
    personService
      .add({ name: newName, number: newNumber })
      .then(newPerson => setPersons(persons.concat(newPerson)));
    setNewName("");
    setNewNumber("");
  };

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
      <Persons persons={persons} searchName={searchName} />
    </div>
  );
};

export default App;
