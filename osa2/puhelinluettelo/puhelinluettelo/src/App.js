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

    const dublicate = persons.filter(person => person.name === newName);

    if (dublicate.length === 1) {
      persons.forEach(person => {
        if (person.name === newName) {
          const newId = person.id;
          const replace = window.confirm(
            `${
              person.name
            } is already added to phonebook, replace the old number with a nwe one?`
          );

          if (replace) {
            personService
              .replace(newId, { ...person, number: newNumber })
              .then(newPerson =>
                setPersons(
                  persons.map(person => {
                    return person.id !== newId ? person : newPerson;
                  })
                )
              );
          }
        }
      });
    } else {
      personService
        .add({ name: newName, number: newNumber })
        .then(newPerson => setPersons(persons.concat(newPerson)));
    }

    setNewName("");
    setNewNumber("");
  };

  const handleDelete = id => {
    const confirmRemoval = window.confirm(`Delete ?`);

    if (confirmRemoval) {
      personService
        .remove(id)
        .then(setPersons(persons.filter(person => person.id !== id)));
    }
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
      <Persons
        persons={persons}
        searchName={searchName}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
